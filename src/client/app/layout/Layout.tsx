import {Main} from "./Main/Main";
import s from './Layout.module.scss';
import {LayoutProps} from "./Layout.props";
import {FunctionComponent} from "react";
import {Header} from "./Header/Header";
import {AppContextProvider} from "../../context/app.context";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Main>
                {children}
            </Main>
        </div>
    )
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {

        return (
            <AppContextProvider>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        )
    }
}