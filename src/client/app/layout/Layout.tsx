import React, {FunctionComponent} from "react";
import Image from "next/image";

import {Main} from "./Main/Main";
import {Header} from "./Header/Header";

import s from './Layout.module.scss';
import {LayoutProps} from "./Layout.props";

import defaultBg from "@/resources/img/bg.jpeg";
import {Theme, useTheme} from "@/context/Theme.context";
import cn from "classnames";

const Layout = ({children}: LayoutProps): JSX.Element => {
    const {theme, setTheme} = useTheme();

    return (
        <>
            {theme === Theme.Grey && <Image className={s.image} src={defaultBg} layout='fill'/>}
            {theme === Theme.Light && <div className={cn(s.image, s.light)}/>}
            {theme === Theme.Dark && <div className={cn(s.image, s.dark)}/>}
            <div className={s.wrapper}>
                <Header/>
                <Main>
                    {children}
                </Main>
            </div>
        </>
    )
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout><Component {...props}/></Layout>
        )
    }
}