import {Box, Center, VStack,Text} from '@chakra-ui/react'
import {tabs} from '../../constant/data';
import {Carousel} from "primereact/carousel";
import React from "react";


export default function clinic_detail({dir}) {
    return (
        <VStack dir={dir}>
            <Center>
                <Box>
                <Carousel value={tabs} itemTemplate={itemTemplate} orientation="horizontal"
                          header={<h1>Header</h1>}></Carousel>
            </Box>

            </Center>
            <Text color='brand.darkgray' fontSize='l' textAlign='center' w={'calc(64vh)'}>
                Welcome to Lumière Cosmetic Clinic, Sydney’s premiere medical-grade cosmetic surgical clinic that puts a significant focus on minimally invasive procedures to help revitalise and refresh your look.
            </Text>

        </VStack>


    );
}

const itemTemplate = (offers) => {
    return (
        <Box h={'calc(36vh)'} w={'calc(64vh)'}> <img src={`images/product/${offers.image}`} alt={offers.name}
                                                     className="product-image"/></Box>


    );
}