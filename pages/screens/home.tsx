import {Box, Center, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import {tabs} from '../../constant/data';
import {FormattedMessage} from "react-intl";
import Offers from "./offers";
import Clinics from "./clinics";
import { Header } from '../../component/hrader';
import Simple from "../../component/navBar";



export default function Home({dir}) {
    return (
        <Stack bgGradient={'linear(to-r, blackAlpha.600, transparent)'} dir={dir}>
            <Header textHeading={"heading"}  motoHeading={"heading_sub"} />
            {/*<Simple></Simple>*/}
            <Tabs  isFitted variant="soft-rounded">
                <TabList>
                    {tabs.map(tab => (
                        <Tab mb={null}
                             key={tab}>
                            <FormattedMessage id={tab}/>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>

                    <TabPanel key={1}><Offers dir={dir}></Offers> </TabPanel>
                    <TabPanel key={1}><Clinics dir={dir}></Clinics> </TabPanel>
                    <TabPanel key={1}><Offers dir={dir}></Offers> </TabPanel>

                </TabPanels>
            </Tabs>


        </Stack>
    );
}