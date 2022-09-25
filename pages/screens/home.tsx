import {Box, Center, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import {tabs} from '../../constant/data';
import {FormattedMessage} from "react-intl";
import Offers from "./offers";
import Clinics from "./clinics";
import { Header } from '../../component/header';
import Simple from "../../component/navBar";
import {FooterApp} from "../../component/Footer";



export default function Home({dir}) {
    return (
        <Stack bgGradient={'linear(to-r, blackAlpha.600, transparent)'} dir={dir}>
            <Header textHeading={"heading"}  motoHeading={"heading_sub"} />
            {/*<Simple></Simple>*/}
            <Tabs  isFitted variant="soft-rounded"    >
                <TabList>
                    {tabs.map(tab => (
                        <Tab mb={null}fontSize={'2xl'} fontWeight={'bold'}  _hover={{transform: "scale(1.03)",}} transition={"0.2s ease-in-out"} color={'brand.darkgray'} _selected={{ fontSize:'2xl', color: 'white', bg: 'brand.hoverPrimary' }}

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
<FooterApp></FooterApp>

        </Stack>
    );
}