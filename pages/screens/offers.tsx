import {Box, Flex, SimpleGrid, Spacer, Stack, Text} from '@chakra-ui/react'
import {FormattedMessage} from "react-intl";
import {offers} from "../../constant/data";
import {Cart_offers} from "../../component/cart_offers";
import React from "react";


export default function Offers({dir}) {
    let onSearchService= (e) => {}
    return (

        <Stack dir={dir}>

            <Flex>

                <SimpleGrid columns={3} spacingX='20px' dir={dir} w='calc(75%)'>
                    {offers.map(offer => (
                        <Cart_offers dir={dir} id={offer.id} image={offer.image} description={offer.description}
                                     price={offer.price} title={offer.title} ratingCount={offer.rating.count}
                                     ratingRate={offer.rating.rate}></Cart_offers>
                    ))}

                </SimpleGrid>
                <Box w='calc(15%)'></Box>
                <Box w='calc(30%)' h={'calc(75%)'}>
                    <Text fontSize='3xl' fontWeight={'bold'}> <FormattedMessage id={"our_offers"}/></Text>
                    <Spacer></Spacer>
                    {offers.map(offer => (
                        <Text  _hover={{ Color: "brand.lightgray",fontSize:'xl' }}
                               fontSize='l' p={'5px'} onClick={onSearchService}>{offer.category}  </Text>
                    ))}
                </Box>
            </Flex>
        </Stack>


    );
}