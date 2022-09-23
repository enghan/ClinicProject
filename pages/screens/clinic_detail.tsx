import  {Box, Center, Container, Heading, HStack, SimpleGrid, Stack, Text, VStack,Icon} from '@chakra-ui/react'
import {offers} from '../../constant/data';
import {Carousel} from "primereact/carousel";
import React from "react";
import CaptionCarousel from "../../component/Carousl";
import {CheckIcon} from "@chakra-ui/icons";
const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
        id: i,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
});

export default function clinic_detail({dir}) {
    return (
        <VStack dir={dir}>
            <Center>
                <Box>
                    <Carousel value={offers} itemTemplate={itemTemplate} orientation="horizontal" numVisible={1}
                              numScroll={1}
                              header={<h1>Header</h1>}></Carousel>
                </Box>

            </Center>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>This is the headline</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Welcome to Lumière Cosmetic Clinic, Sydney’s premiere medical-grade cosmetic surgical clinic that puts a
                        significant focus on minimally invasive procedures to help revitalise and refresh your look..
                    </Text>
                </Stack>

                <Container maxW={'6xl'} mt={10}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                        {features.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon} />
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={'gray.600'}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>


        </VStack>

    );
}

const itemTemplate = (offers) => {
    return (
        <img src={offers.image} alt={offers.name} width={'200px'}
        />


    );
}