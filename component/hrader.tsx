import {Box, Button, Center, Flex, Heading, Stack, Text,VStack} from "@chakra-ui/react";
import {FormattedMessage} from "react-intl";
import {HamburgerIcon} from "@chakra-ui/icons";

export function Header({textHeading, motoHeading}) {
    return (
        <VStack
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Chakra UI
                </Heading>
            </Flex>



            <Box
               // display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >

            </Box>
            <Center> <Box maxW='32rem'>
                <Heading pt={'20px'} pb={'20px'}> <FormattedMessage id={textHeading}/></Heading>
                <Text fontSize='xl'>
                    <FormattedMessage id={motoHeading}/>
                </Text>

            </Box></Center>
        </VStack>



    );
}