import {
    Badge,
    Box,
    Button, Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {Rating} from "primereact/rating";
import {FcLike} from "react-icons/fc";
import {IoHeartOutline} from "react-icons/io5";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";
import {FormattedMessage} from "react-intl";
import OfferDetail from "../pages/screens/offerDetail";
import Link from "next/link";


export function Cart_offers({dir, id, image, title, price, description, ratingCount, ratingRate}) {
    const [offerState, setOfferState] = useRecoilState(myOfferState);
    const {isOpen, onOpen, onClose} = useDisclosure()

    let resetModal = (e) => {
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
        <Box w="300px" rounded="20px" dir={dir}
             overflow="hidden" bg={'brand.primary'} mt={10}>
            <Image src={image} alt="Card Image" boxSize="300px" borderRadius={"sm"}   objectFit={"cover"} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"}>
            </Image>

            <IconButton
                colorScheme='brand.darkgray'
                aria-label='Call Sage'
                fontSize='32px'
                bg={'color.darkgray'}
                onClick={onFavoritePressed}
                pt={'20px'}
                icon={offerState.Favorite === true ? <FcLike/> : <IoHeartOutline/>}
            />


            <Box p={5}>
                <Stack align="center">
                    <Badge variant='subtle' colorScheme='purple'
                           rounded="full" px={2}>
                        Active
                    </Badge>
                </Stack>
                <Spacer/>
                <Stack align="center">
                    <Text as="h2" textOverflow={'ellipsis'} fontWeight="normal" my={2}>
                        {title}
                    </Text>
                    <Spacer/>
                    <Text fontWeight="bold">
                        {price}$
                    </Text>
                    <Spacer/>
                    {/*<Rating value={offerState.Rate} onChange={onRatePressed } cancel={false} color={'brand.darkgray'} />*/}
                    <Rating value={ratingRate} cancel={false} color={'#852147'}/>
                    <Spacer/>

                </Stack>
                <Flex>
                    <Spacer/>
                    <Button variant="primary" pt={'12px'}
                            colorScheme="green" size="m"
                            onClick={resetModal}>
                        <FormattedMessage id={"learn_more"}/>

                    </Button>

                    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader> <HStack spacing='50%'>
                                <Box><FormattedMessage id={"detail"}/></Box>
                                <Box>
                                    <Link color='brand.primary !important' href={'../pages/screens/Clinics'}>
                                        linksdddd
                                    </Link>
                                </Box>


                            </HStack></ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody pb={6}>
                                <OfferDetail dir={dir} id={offerState.id}/>
                                {/*<Lorem count={2} />*/}

                            </ModalBody>

                            <ModalFooter>
                                <Button variant={'primary'}>
                                    Save
                                </Button>
                          <Container width={'50%'}></Container>
                                <Button variant={'primary'} onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Flex>
            </Box>
        </Box>


    )
}