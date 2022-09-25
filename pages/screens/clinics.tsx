import {
    Box,
    Center,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    SimpleGrid,
    Spacer,
    Stack,
    Text
} from '@chakra-ui/react'
import {Search2Icon} from "@chakra-ui/icons";
import {offers} from '../../constant/data';
import {Cart_clinics} from "../../component/cart_clinics";
import {FormattedMessage} from "react-intl";
import React from "react";


export default function Clinics({dir}) {
    function onTextChanged(e) {
        console.log(e.target.value);

    }

    return (
        <Stack dir={dir}>
            <Center h='calc(8vh)' w='calc(50%)'>
                <InputGroup w='calc(80vh)'>
                    <InputLeftElement
                        pointerEvents='none'
                        color={"brand.darkgray"}
                        fontSize='1.2em'
                    />
                    <Input placeholder='search' defaultValue={'search'} onChange={onTextChanged}/>
                    <InputRightElement children={<Search2Icon color={"brand.gray"}/>}/>
                </InputGroup>
            </Center>


                <SimpleGrid columns={4} spacingX='10px' dir={dir}>
                    {offers.map(offer => (
                        <Cart_clinics dir={dir} id={offer.id} image={offer.image} description={offer.description}
                                      price={offer.price} title={offer.title} ratingCount={offer.rating.count}
                                      ratingRate={offer.rating.rate}></Cart_clinics>
                    ))}


                </SimpleGrid>

        </Stack>


    );
}