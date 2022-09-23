import {Box, Button, Center, Image, Spacer, Stack, Text, useDisclosure, VStack} from "@chakra-ui/react";
import React from "react";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";
import {FormattedMessage} from "react-intl";
import ClinicDetail from "../pages/screens/clinic_detail";
import Router from "next/router";


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
        <VStack>
            <Box w="300px" h={'calc(100%)'} rounded="10px" border={'solid'} borderWidth={'1px'} borderColor={'brand.lightgray'} dir={dir}
                 overflow="hidden" mt={10}>
                <Image src={image} alt="Card Image" boxSize="300px" borderRadius={"sm"}  objectFit={"cover"} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"}>
                </Image>
                <Center> <Stack align="center">
                    <Text p="10px" textOverflow={'ellipsis'} fontWeight="bold" my={2}>
                        {price}
                    </Text>
                    <Text p="10px" textOverflow={'ellipsis'} fontWeight="semibold" textColor={'brand.darkgray'} my={2}>
                        {title}
                    </Text>
                    <Spacer/>

                </Stack></Center>

            </Box>
            <Button
                variant="outline"
                onClick={resetModal}
            >
                <FormattedMessage id={"learn_more"}></FormattedMessage>
            </Button>


            <Spacer/>
        </VStack>


    )
}