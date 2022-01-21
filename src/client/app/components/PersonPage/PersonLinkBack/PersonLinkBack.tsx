import {SyntheticEvent} from "react";
import {useRouter} from "next/router";

import s from './PersonLinkBack.module.scss';

import RouterBackIcon from './PersonBack.icon.svg';

export const PersonLinkBack = (): JSX.Element => {
    const router = useRouter();

    return (
        <a className={s.link} href="/" onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            router.back()
        }}>
            <RouterBackIcon/>
            Go Back
        </a>
    )
}