import {
    Badge,
    Box,
    Flex,
    IconButton,
    Image,
    Spacer,
    Stack,
    Text,
    Button,
    ModalOverlay,
    Modal,
    ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Container
} from "@chakra-ui/react";
import React, {useState} from "react";
import {Rating} from "primereact/rating";
import  {FcLike,FcLikePlaceholder}  from "react-icons/fc";
import { IoHeartOutline } from "react-icons/io5";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";
import {FormattedMessage} from "react-intl";
import OfferDetail from "../pages/screens/offerDetail";


export function Cart_offers({dir,id, image,title,price,description,ratingCount,ratingRate}) {
    const [offerState, setOfferState] = useRecoilState(myOfferState);
    const { isOpen, onOpen, onClose } = useDisclosure()
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
    }
    let onFavoritePressed = (e) => {
        offerState.Favorite==false? setOfferState({
            ...offerState,
            Favorite: true

        }):setOfferState({
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
        <Box w="300px" rounded="20px" dir={dir}
             overflow="hidden" bg={'brand.primary'} mt={10}>
            <Image src= {image}     alt="Card Image" boxSize="300px">
            </Image>

            <IconButton
                variant='outline'
                colorScheme='brand.gray'
                aria-label='Call Sage'
                fontSize='20px'
                bg={'color.gray'}
               onClick={onFavoritePressed}
                icon={offerState.Favorite===true ?<FcLike />:<IoHeartOutline />}
            />


            <Box p={5}>
                <Stack align="center">
                    <Badge variant="solid" colorScheme='brand.darkgray'
                           rounded="full" px={2}>
                        Active
                    </Badge>
                </Stack>
                <Spacer/>
                <Stack align="center" >
                    <Text as="h2" textOverflow={'ellipsis'}  fontWeight="normal" my={2}>
                        {title}
                    </Text>
                    <Spacer/>
                    <Text fontWeight="bold">
                        {price}$
                    </Text>
                    <Spacer/>
                     {/*<Rating value={offerState.Rate} onChange={onRatePressed } cancel={false} color={'brand.darkgray'} />*/}
                    <Rating value={ratingRate}  cancel={false} color={'#852147'}  />
                    <Spacer/>

                </Stack>
                <Flex>
                    <Spacer/>
                    <Button variant="primary"
                            colorScheme="green" size="m"
                    onClick={resetModal}>
                        <FormattedMessage id={"learn_more"}/>

                    </Button>

                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <OfferDetail dir={dir} id={offerState.id} />
                                {/*<Lorem count={2} />*/}

                            </ModalBody>

                            <ModalFooter>
                                <Button >
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Flex>
            </Box>
        </Box>


    )
}