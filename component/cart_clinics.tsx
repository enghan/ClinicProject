import  {
    Box,
    Button,
    Center,
        Icon,
    chakra,
    Flex,
    Image,
    Spacer,
    Stack,
    Text, Tooltip,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import React from "react";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";
import Router from "next/router";
import {FormattedMessage} from "react-intl";
import {ArrowRightIcon} from '@chakra-ui/icons'
import Rating from "./rating";
import {data} from "browserslist";


export function Cart_clinics({dir, id, image, title, price, description, ratingCount, ratingRate}) {
    const [offerState, setOfferState] = useRecoilState(myOfferState);
    const {isOpen, onOpen, onClose} = useDisclosure()

    function resetModal() {
        debugger
        setOfferState({
            ...offerState,
            id: '',
        })
        onOpen();
        setOfferState({
            ...offerState,
            id: id,
        })
        Router.push("../screens/clinic_detail");

    }

    let onFavoritePressed = (e) => {
        offerState.Favorite == false ? setOfferState({
            ...offerState,
            Favorite: true

        }) : setOfferState({
            ...offerState,
            Favorite: false

        });
    }
    let onRatePressed = (e) => {
        debugger
        setOfferState({
            ...offerState,
            Rate: e.value

        });
    }

    return (
        // <VStack>
        //     <Box w="300px" h={'calc(100%)'} rounded="10px" dir={dir}
        //          overflow="hidden" mt={10}>
        //         <Image src={image} alt="Card Image" boxSize="300px" borderRadius={"sm"} objectFit={"cover"}
        //                _hover={{transform: "scale(1.03)",}} transition={"0.2s ease-in-out"}>
        //         </Image>
        //         <Center> <Stack align="center">
        //             <Text p="10px" textOverflow={'ellipsis'} fontWeight="bold" my={2}>
        //                 {price}
        //             </Text>
        //             <Text p="10px" textOverflow={'ellipsis'} fontWeight="semibold" textColor={'brand.darkgray'} my={2}>
        //                 {title}
        //             </Text>
        //             <Spacer/>
        //
        //         </Stack></Center>
        //
        //     </Box>
        //     <Button
        //         variant="outline"
        //         onClick={resetModal}
        //     >
        //         <FormattedMessage id={"learn_more"}></FormattedMessage>
        //     </Button>
        //
        //
        //     <Spacer/>
        // </VStack>
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">


                <Image
                    src={image}
                    alt={`Picture of ${title}`}
                    roundedTop="lg"
                />

                <Box p="6">

                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                           >
                            {title}
                        </Box>
                        <Tooltip
                            label={<FormattedMessage id={"learn_more"}/>}
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={ArrowRightIcon} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating rating={ratingRate} numReviews={ratingCount} />

                    </Flex>
                </Box>
            </Box>
        </Flex>

    )
}