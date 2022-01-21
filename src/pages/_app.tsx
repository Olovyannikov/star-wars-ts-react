import Head from "next/head";
import {Provider} from "react-redux";
import React, {useState} from "react";

import store from "@/store/store";
import {Theme, ThemeContext} from "@/context/Theme.context";

import "@/styles";
import type {AppProps} from 'next/app';

const MyApp = ({Component, pageProps, router}: AppProps): JSX.Element => {
    const [theme, setTheme] = useState(Theme.Grey);

    return (
        <>
            <Head>
                <title>Star Wars Database</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
                <meta property="og:locale" content="ru_RU"/>
            </Head>

            <ThemeContext.Provider value={{theme, setTheme}}>
                <Provider store={store}>
                    <Component
                        {...pageProps} />
                </Provider>
            </ThemeContext.Provider>
        </>
    )
}

export default MyApp;