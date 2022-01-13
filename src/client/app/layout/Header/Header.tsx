import cn from "classnames";
import Link from 'next/link';
import {Container} from "@/ui";
import s from './Header.module.scss';
import {useRouter} from "next/router";
import {headerData} from "./Header.data";

export const Header = (): JSX.Element => {
    const router = useRouter();

    return (
        <header>
            <Container>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        {headerData.map((link: { route: string, text: string }) => (
                            <li key={link.text}>
                                <Link href={link.route}>
                                    <a
                                        className={cn(s.link, {[s.active]: router.asPath.replace(/\?.*/g, '') === link.route.replace(/\?.*/g, '')})}
                                    >
                                        {link.text}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
};