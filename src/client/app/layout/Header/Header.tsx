import cn from "classnames";
import Link from 'next/link';
import {Container} from "@/ui";
import s from './Header.module.scss';
import {useRouter} from "next/router";
import {headerData} from "./Header.data";
import {FavoriteIcon} from "../../ui/FavoriteIcon/FavoriteIcon";

export const Header = (): JSX.Element => {
    const router = useRouter();

    return (
        <header>
            <Container>
                <nav className={s.nav}>
                    <ul className={s.list}>
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