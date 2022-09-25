import {Box, Flex, SimpleGrid, Spacer, Stack, Text} from '@chakra-ui/react'
import {offers} from "../../constant/data";
import {Cart_offers} from "../../component/cart_offers";
import React from "react";


export default function Favorite({dir}) {
    return (

        <Stack dir={dir}>

                <SimpleGrid columns={3} spacingX='20px' dir={dir} >
                    {offers.map(offer => (
                        <Cart_offers dir={dir} id={offer.id} image={offer.image} description={offer.description}
                                     price={offer.price} title={offer.title} ratingCount={offer.rating.count}
                                     ratingRate={offer.rating.rate} Favorite={true}></Cart_offers>
                    ))}

                </SimpleGrid>

        </Stack>


    );
}