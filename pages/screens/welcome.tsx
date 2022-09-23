import {Flex, Button, VStack, Stack, Text, useBreakpointValue} from '@chakra-ui/react';
import Link from "next/link";
import {FormattedMessage} from "react-intl";
import getRequest from "../api/axios";
import {HOME_URL} from "../../constant/data";
import Router from "next/router";

let runApp = (e) => {

        e.preventDefault();

    const response = getRequest(HOME_URL);
            console.log(response);
     console.log('ddddddddddd'+{response})
    Router.push("./screens/home");


}

export default function Welcome({dir}) {

    return (

        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                '/Image/cover.jpg' }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                    <Stack direction={'row'}>
                        <Link href="./screens/home" locale={'en'}>
                        <Button
                            bg={'brand.primary'}
                            rounded={'full'}
                            color={'brand.dark'}
                            _hover={{ bg: 'brand.hoverPrimary' }}>
                            English
                        </Button>
                        </Link>
                        <Link href="./screens/home" locale={'ar'}>
                        <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            عربي
                        </Button>
                        </Link>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
        //     <Center>
        //
        //         {/*<Link href="./screens/home">*/}
        //             <Button
        //                 variant='baseStyle'
        //                 onClick={runApp}
        //             >
        //                 <FormattedMessage id="begin_button"/>
        //             </Button>
        //         {/*</Link>*/}
        //
        //     </Center>
        //     <Center pt={'50px'}>
        //         <HStack>
        //             <Link href="/" locale={'en'}>
        //                 <Button
        //                     variant='secondary'
        //                     textDecoration={'underline'}
        //
        //                 >
        //                     English
        //                 </Button>
        //             </Link>
        //             <Link href="/" locale={'ar'}>
        //                 <Button
        //                     variant='secondary'
        //                     textDecoration={'underline'}
        //
        //                 >
        //                     عربي
        //                 </Button>
        //             </Link></HStack>
        //     </Center>
        // </Box>

    );
}

