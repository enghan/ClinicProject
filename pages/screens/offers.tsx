import {Badge, Box, Button, Flex, Image, Spacer, Stack, Tab, Text, SimpleGrid} from '@chakra-ui/react'
import {FormattedMessage} from "react-intl";
import {offers, tabs} from "../../constant/data";
import {Cart_offers} from "../../component/cart_offers";


export default function Offers({dir}) {
    return (
        <SimpleGrid columns={4} spacingX='40px'  dir={dir}>
            {offers.map(offer => (
                <Cart_offers dir={dir}  id={offer.id}  image={offer.image}  description={offer.description} price={offer.price}  title={offer.title}  ratingCount={offer.rating.count}  ratingRate={offer.rating.rate}></Cart_offers>
            ))}

        </SimpleGrid>


    );
}