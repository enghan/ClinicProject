import {Box, Button, Center, HStack} from '@chakra-ui/react';
import Link from "next/link";
import {FormattedMessage} from "react-intl";

function runApp() {
    console.log("Button Clicked");


}

export default function Welcome({dir}) {

    return (

        <Box
            bg='brand.darkgray'
            bg-cover
            bg-center
            h='calc(100vh)'
        >
            <Center pl={'100px'}>
                <Box boxSize='sm'>
                    {/*<Image src='/Images/Logo.png' alt='Logo' width='280' height='280'/>*/}
                </Box>
            </Center>
            <Center>

                <Link href="./screens/home">
                    <Button
                        variant='baseStyle'
                        onClick={runApp}
                    >
                        <FormattedMessage id="begin_button"/>
                    </Button>
                </Link>

            </Center>
            <Center pt={'50px'}>
                <HStack>
                    <Link href="/" locale={'en'}>
                        <Button
                            variant='secondary'
                            textDecoration={'underline'}

                        >
                            English
                        </Button>
                    </Link>
                    <Link href="/" locale={'ar'}>
                        <Button
                            variant='secondary'
                            textDecoration={'underline'}

                        >
                            عربي
                        </Button>
                    </Link></HStack>
            </Center>
        </Box>

    );
}

