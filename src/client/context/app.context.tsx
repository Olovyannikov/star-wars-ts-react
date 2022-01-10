import {createContext, PropsWithChildren} from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({children}: PropsWithChildren<any>): JSX.Element => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}