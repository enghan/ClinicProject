import {
    Box,
    Button,
    Center,
    Container, Flex,
    HStack,
    IconButton,
    List,
    ListIcon,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {FcLike} from "react-icons/fc";
import {IoHeartOutline} from "react-icons/io5";
import {useRecoilState} from "recoil";
import {myOfferState} from "../atoms/offersAtom";
import {FormattedMessage} from "react-intl";
import {CheckIcon} from "@chakra-ui/icons";
import Link from "next/link";
import OfferDetail from "../pages/screens/offerDetail";
import Rating from "./rating";
import Favorite from "../pages/screens/favorite";


export function Cart_offers({dir, id, image, title, price, description, ratingCount, ratingRate,Favorite}) {
    const [offerState, setOfferState] = useRecoilState(myOfferState);
    const {isOpen, onOpen, onClose} = useDisclosure()
debugger
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
        // <Box w="300px" rounded="20px" dir={dir}
        //      overflow="hidden" bg={'brand.primary'} mt={10}>
        //     <Image src={image} alt="Card Image" boxSize="300px" borderRadius={"sm"}   objectFit={"cover"} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"}>
        //     </Image>
        //
        //     <IconButton
        //         colorScheme='brand.darkgray'
        //         aria-label='Call Sage'
        //         fontSize='32px'
        //         bg={'color.darkgray'}
        //         onClick={onFavoritePressed}
        //         pt={'20px'}
        //         icon={offerState.Favorite === true ? <FcLike/> : <IoHeartOutline/>}
        //     />
        //
        //
        //     <Box p={5}>
        //         <Stack align="center">
        //             <Badge variant='subtle' colorScheme='purple'
        //                    rounded="full" px={2}>
        //                 Active
        //             </Badge>
        //         </Stack>
        //         <Spacer/>
        //         <Stack align="center">
        //             <Text as="h2" textOverflow={'ellipsis'} fontWeight="normal" my={2}>
        //                 {title}
        //             </Text>
        //             <Spacer/>
        //             <Text fontWeight="bold">
        //                 {price}$
        //             </Text>
        //             <Spacer/>
        //             {/*<Rating value={offerState.Rate} onChange={onRatePressed } cancel={false} color={'brand.darkgray'} />*/}
        //             <Rating value={ratingRate} cancel={false} color={'#852147'}/>
        //             <Spacer/>
        //
        //         </Stack>
        //         <Flex>
        //             <Spacer/>
        //             <Button variant="primary" pt={'12px'}
        //                     colorScheme="green" size="m"
        //                     onClick={resetModal}>
        //                 <FormattedMessage id={"learn_more"}/>
        //
        //             </Button>
        //

        //         </Flex>
        //     </Box>
        // </Box>
        <Center dir={dir} py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'brand.darkgray')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('brand.darkgray', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        {title}
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        {/*<Text fontSize={'xl'}>  <FormattedMessage id={"S_P"}/></Text>*/}
                        <Text fontWeight={800} fontSize={'xl'}>
                            <FormattedMessage id={"S_P"}/>57
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            <FormattedMessage id={"S_P"}/>199
                        </Text>

                    </Stack>
                    {Favorite &&(<IconButton
                    colorScheme='brand.darkgray'
                    aria-label='Call Sage'
                    fontSize='32px'
                    color={'brand.darkgray'}
                    onClick={onFavoritePressed}
                    pt={'20px'}
                    icon={offerState.Favorite === true ? <FcLike/> : <IoHeartOutline/>}
                />)}

                </Stack>
                <Flex pb={'10px'} px={6} justifyContent="space-between" alignContent="center">
                    <Rating rating={ratingRate} numReviews={ratingCount} />
                </Flex>
                <Box bg={useColorModeValue('brand.light', 'brand.darkgray')} px={6} py={10}>
                    <List spacing={3}>

                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400"/>
                           10_10-2022 open /15_10_2022 colse
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400"/>
                            clinic name
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400"/>
                           to inquire :0999999999
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400"/>
                            All features
                        </ListItem>
                    </List>

                    <Button
                       variant={'secondary'}
                        onClick={resetModal}
                        >
                        <FormattedMessage id={"learn_more"}></FormattedMessage>
                    </Button>
                </Box>
            </Box>
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
                        <Button variant={'secondary'}>
                            Save
                        </Button>
                        <Container width={'50%'}></Container>
                        <Button variant={'secondary'} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>

    )
}