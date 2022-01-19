import React from "react";
import Head from "next/head";
import Image from 'next/image';
import {Provider} from "react-redux";

import store from "@/store/store";

import type { AppProps } from 'next/app';

import defaultBg from "@/resources/img/bg.jpeg";
import "@/styles";

const MyApp = ({Component, pageProps, router}: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Star Wars Database</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
                <meta property="og:locale" content="ru_RU"/>
            </Head>
            <Image src={defaultBg} layout='fill'/>
            <Provider store={store}>
                <Component
                    {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp;