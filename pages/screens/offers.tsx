import {Badge, Box, Button, Flex, Image, Spacer, Stack, Tab, Text, SimpleGrid} from '@chakra-ui/react'
import {FormattedMessage} from "react-intl";
import {tabs} from "../../constant/data";
import {Cart_offers} from "../../component/cart_offers";


export default function Offers({dir}) {
    return (
        <SimpleGrid columns={4} spacingX='40px'  dir={dir}>
            {tabs.map(tab => (
                <Cart_offers></Cart_offers>
            ))}

        </SimpleGrid>


    );
}