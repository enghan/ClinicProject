import {Box, Center, Heading, Text} from "@chakra-ui/react";
import {FormattedMessage} from "react-intl";

export function Header({textHeading, motoHeading}) {
    return (
        <Center> <Box maxW='32rem'>
            <Heading pt={'20px'} pb={'20px'}> <FormattedMessage id={textHeading}/></Heading>
            <Text fontSize='xl'>
                <FormattedMessage id={motoHeading}/>
            </Text>

        </Box></Center>);
}