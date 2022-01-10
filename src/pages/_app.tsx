import "@/styles";
import React from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'

const MyApp = ({Component, pageProps, router}: AppProps): JSX.Element => {

    return (
        <>
            <Head>
                <title>Star Wars Database</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
                <meta property="og:locale" content="ru_RU"/>
            </Head>
            <Component {...pageProps} />
        </>)
}

export default MyApp;