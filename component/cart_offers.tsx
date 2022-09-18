import {Badge, Box, Flex, IconButton, Image, Spacer, Stack, Text,Icon} from "@chakra-ui/react";
import React, {useState} from "react";
import {Rating} from "primereact/rating";
import  AiOutlineHeart  from 'react-icons';
import  FcLike  from "react-icons/fc";
import {Button} from "primereact/button";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";

const [offerState, setOfferState] = useRecoilState(myOfferState);

export function Cart_offers({textHeading, motoHeading}) {
    let onFavoritePressed = () => {
        setOfferState({
            ...offerState,
            Favorite: true

        });
    }
let onRatePressed = (e) => {
        setOfferState({
            ...offerState,
            Rate: e.value

        });
    }

    return (
        <Box w="300px" rounded="20px"
             overflow="hidden" bg={'brand.primary'} mt={10}>
            <Image src=
                       "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_20/1435573/overdoing-skincare-today-main-190509.jpg"
                   alt="Card Image" boxSize="300px">
            </Image>
            {/*<IconButton*/}
            {/*    variant='outline'*/}
            {/*    // colorScheme='teal'*/}
            {/*    aria-label='Call Sage'*/}
            {/*    fontSize='20px'*/}
            {/*    icon={<Icon as={FcLike} />}*/}
            {/*   className={'chakra-icon css-1i1i0ua'}*/}
            {/*/>*/}


            <Button onClick={() =>onFavoritePressed()} className={offerState.Favorite === true
                ? "p-button p-component p-button-rounded p-button-danger p-button-icon-only pi-heart"
                : "p-button-icon p-c pi pi-heart p-button-icon-only p-button-rounded p-button p-component  p-button-help p-button-text p-button-danger"
            }  />
            <Box p={5}>
                <Stack align="center">
                    <Badge variant="solid" colorScheme='brand.darkgray'
                           rounded="full" px={2}>
                        GeeksForGeeks
                    </Badge>
                </Stack>
                <Stack align="center">
                    <Text as="h2" fontWeight="normal" my={2}>
                        A Computer Science Portal for Geeks
                    </Text>
                    <Text fontWeight="light">
                        A platform for students to study CSE concepts.
                    </Text>
                    <Text fontWeight="bold">
                       110$
                    </Text>
                    <Spacer/>

                    <Rating value={offerState.Rate} onChange={(e) =>onRatePressed } cancel={false} color={'brand.darkgray'} />
                    <Spacer/>
                </Stack>
                <Flex>
                    <Spacer/>
                    {/*<Button variant="primary"*/}
                    {/*        colorScheme="green" size="m">*/}
                    {/*    <FormattedMessage id={"learn_more"}/>*/}

                    {/*</Button>*/}
                </Flex>
            </Box>
        </Box>


    )
}