import cn from "classnames";
import Link from 'next/link';
import {useRouter} from "next/router";

import {Theme, useTheme} from "@/context/Theme.context";

import {Container, FavoriteIcon} from "@/ui";

import s from './Header.module.scss';

import {headerData} from "./Header.data";

import {SW} from "./img/SW";
import {Empire} from "./img/Empire";
import {Aliance} from "./img/Aliance";

export const Header = (): JSX.Element => {
    const router = useRouter();

    const {theme, setTheme} = useTheme();

    return (
        <header>
            <Container>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.icon}>
                            {router.asPath === '/' ?
                                <a>
                                    {theme === Theme.Light &&
                                        <Aliance color={'var(--color-error)'} width={48} height={48}/>}
                                    {theme === Theme.Dark &&
                                        <Empire color={'var(--color-red)'} width={48} height={48}/>}
                                    {theme === Theme.Grey && <SW width={48} height={48}/>}
                                </a>
                                :
                                <Link href='/'>
                                    <a>
                                        {theme === Theme.Light &&
                                            <Aliance color={'var(--color-error)'} width={48} height={48}/>}
                                        {theme === Theme.Dark &&
                                            <Empire color={'var(--color-red)'} width={48} height={48}/>}
                                        {theme === Theme.Grey && <SW width={48} height={48}/>}
                                    </a>
                                </Link>
                            }
                        </li>
                        {headerData.map((link: { route: string, text: string }) => (
                            <li key={link.text}>
                                <Link href={link.route} shallow={true}>
                                    <a
                                        className={cn(s.link,
                                            {[s.active]: router.asPath === link.route},
                                            {[s.active]: router.asPath.includes('person') && link.text === 'Characters'}
                                        )}
                                    >
                                        {link.text}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li className={s.favoriteItem}>
                            <Link href='/favorites'>
                                <a
                                    className={cn(s.link, s.fav)}
                                    aria-label="Goto Fav Page"
                                >
                                    <FavoriteIcon width={36} height={36}/>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
};