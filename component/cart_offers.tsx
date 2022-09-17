import {Badge, Box, Button, Flex, Image, Spacer, Stack, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {FormattedMessage} from "react-intl";
import {Rating} from "primereact/rating";


export function Cart_offers({textHeading, motoHeading}) {
    const [value, setValue] = useState(null);
    return (
        <Box w="300px" rounded="20px"
             overflow="hidden" bg={'brand.primary'} mt={10}>
            <Image src=
                       "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_20/1435573/overdoing-skincare-today-main-190509.jpg"
                   alt="Card Image" boxSize="300px">
            </Image>
            <Box p={5}>
                <Stack align="center">
                    <Badge variant="solid" colorScheme='brand.darkgray'
                           rounded="full" px={2}>
                        GeeksForGeeks
                    </Badge>
                </Stack>
                <Stack align="center">
                    <Text as="h2" fontWeight="normal" my={2}>
                        A Computer Science Portal for Geeks
                    </Text>
                    <Text fontWeight="light">
                        A platform for students to study CSE concepts.
                    </Text>
                    <Text fontWeight="bold">
                       110$
                    </Text>
                    <Spacer/>

                    <Rating value={value} onIcon="pi pi-circle-fill" offIcon="pi-circle" onChange={(e) => setValue(e.value)} />

                    <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} color={'brand.darkgray'} />
                    <Spacer/>
                </Stack>
                <Flex>
                    <Spacer/>
                    <Button variant="primary"
                            colorScheme="green" size="m">
                        <FormattedMessage id={"learn_more"}/>

                    </Button>
                </Flex>
            </Box>
        </Box>


    )
}