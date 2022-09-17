import {Box, Center, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import {tabs} from '../../constant/data';
import {FormattedMessage} from "react-intl";
import Offers from "./offers";
import Clinics from "./clinics";
import { Header } from '../../component/hrader';


export default function Home({dir}) {
    return (
        <Stack dir={dir}>
            <Header textHeading={"heading"}  motoHeading={"heading_sub"} />

            <Tabs p={'20px'} isFitted variant="unStyled">
                <TabList>
                    {tabs.map(tab => (
                        <Tab mb={null}
                             key={tab}>
                            <FormattedMessage id={tab}/>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>

                    <TabPanel key={1}><Offers></Offers> </TabPanel>
                    <TabPanel key={1}><Clinics></Clinics> </TabPanel>
                    <TabPanel key={1}><Offers></Offers> </TabPanel>

                </TabPanels>
            </Tabs></Stack>


    );
}