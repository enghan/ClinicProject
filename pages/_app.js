import '../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import theme from '../styles/theme';
import ar from "../constant/i18n/ar";
import en from "../constant/i18n/en";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Head from "next/head";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const messages = {
    ar,
    en,
};

function getDirection(locale) {
    if (locale === "ar") {
        return "rtl";
    }

    return "ltr";
}

function MyApp({Component, pageProps}) {
    const {locale} = useRouter();

    return (

        <RecoilRoot>
            < ChakraProvider
                theme={theme}>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <Head>
                        <link rel="icon" href="/favicon.ico" />
                        <title>React App</title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        <meta name="description" content="Web site created using create-next-app" />
                        <meta name="theme-color" content="#000000" />
                    </Head>
                    <Component {...pageProps} dir={getDirection(locale)}/>
                </IntlProvider>


            </ChakraProvider>
        </RecoilRoot>
    );
}

export default MyApp
