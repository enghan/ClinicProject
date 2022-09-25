import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Center,
    Container,
    HStack,
    Icon,
    IconButton,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VStack
} from '@chakra-ui/react'
import React from "react";
import {FcLike} from "react-icons/fc";
import {CheckIcon, PhoneIcon} from "@chakra-ui/icons";
import {FormattedMessage} from 'react-intl';
import {BiMap} from "react-icons/bi";
import {IoHeartOutline} from "react-icons/io5";
import {useRecoilState} from "recoil";
import {myOfferState} from "../../atoms/offersAtom";
import {Rating} from "primereact/rating";

export default function OfferDetail({dir, id}) {
    const [offerState, setOfferState] = useRecoilState(myOfferState);
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
        <Stack dir={dir} overflow={'hidden'}>
            <HStack spacing={'50%'}>
                {true && (<Text fontWeight="bold" fontSize={'xl'} color={'green.500'}
                                bg={useColorModeValue('green.50', 'green.900')}>
                    <FormattedMessage id={"active"}></FormattedMessage>
                </Text>)}

                <IconButton
                    colorScheme='brand.darkgray'
                    aria-label='Call Sage'
                    fontSize='32px'
                    color={'brand.darkgray'}
                    onClick={onFavoritePressed}
                    pt={'5px'}
                    icon={offerState.Favorite === true ? <FcLike/> : <IoHeartOutline/>}

                />
            </HStack>
            <HStack key={id} align={'top'} pt={'2'}>
                <Box color={'green.400'} px={2}>
                    <Icon boxSize={6} as={CheckIcon}/>
                </Box>
                <Text fontWeight={800} fontSize={'xl'}>
                    <FormattedMessage id={"S_P"}/>57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                    <FormattedMessage id={"S_P"}/>199
                </Text>

            </HStack>

            <Box textAlign={'center'} p={'8'}>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Welcome to Lumière Cosmetic Clinic, Sydney’s premiere medical-grade cosmetic surgical clinic that puts a
                    significant focus on minimally invasive procedures to help revitalise and refresh your look..
                </Text>

                <Accordion allowMultiple dir={dir} pt={'4'}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{
                                bg: 'brand.hoverPrimary',
                                color: 'white',
                                fontSize: 'xl',
                                fontWeight: 'bold'
                            }}>
                                <Box flex='1' textAlign='left' fontSize={'xl'} p={'1'}>
                                    <FormattedMessage id={"_clinic"}></FormattedMessage>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack key={id} align={'top'} pt={'2'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon boxSize={6} as={CheckIcon}/>
                                </Box>

                                <Text fontSize={'xl'} fontWeight={600}>{"Clinic Name"}</Text>

                            </HStack>
                            <HStack key={id} align={'top'} pt={'2'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon boxSize={6} as={PhoneIcon}/>
                                </Box>

                                <Text fontSize={'xl'} fontWeight={600}>{"09999999999"}</Text>

                            </HStack>
                            <HStack key={id} align={'top'} pt={'2'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon boxSize={8} as={BiMap}/>
                                </Box>

                                <Text fontSize={'xl'} fontWeight={600}>{"Location"}</Text>

                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Center pt={'4'}>  <Rating value={offerState.Rate} onChange={onRatePressed } cancel={false} color={'brand.darkgray'}></Rating>
                </Center>
            </Box>
        </Stack>


    );
}