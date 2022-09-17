import {Box, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import {tabs} from '../../constant/data';
import {FormattedMessage} from "react-intl";


export default function Clinics({dir}) {
    const title = "Hello guys I'm sending props!! 👑"
    const content = "ohh another prop this is good!!"
    return (
        <Stack dir={dir}>
            {/*{<heading textHeading={title}  motoHeading={content} />}*/}
            <Box maxW='32rem'>
                <Heading mb={4}>{title}</Heading>
                <Text fontSize='xl'>
                    <FormattedMessage id="heading"/>
                </Text>

            </Box>
           </Stack>


    );
}