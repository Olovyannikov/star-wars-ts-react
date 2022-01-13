import {Container} from "@/ui";
import Image from "next/image";
import notFound from './notFound.png';
import {useRouter} from "next/router";
import s from './Error404Page.module.scss';

export const Error404Page = (): JSX.Element => {
    const router = useRouter();

    return (
        <section>
            <Container className={s.container}>
                <Image src={notFound} alt="Page Not Found Image" width={271} height={249}/>
                <p>Not matches for <u>{router.asPath}</u></p>
            </Container>
        </section>
    )
}