import Link from 'next/link';
import Image from "next/image";
import s from './PeopleList.module.scss';
import {PeopleListProps} from "./PeopleList.props";

export const PeopleList = ({people}: PeopleListProps): JSX.Element => {
    return (
        <ul className={s.list}>
            {people.map(({name, id, img}: { name: string, id: string, img: string }) =>
                <li className={s.item} key={id}>
                    <Link href={`/person/${id}`}>
                        <a className={s.link}>
                            <Image
                                src={img}
                                alt={name}
                                layout='responsive'
                                priority
                                width={400}
                                height={550}
                                className={s.image}
                            />
                            <p className={s.name}>{name}</p>
                        </a>
                    </Link>
                </li>)}
        </ul>
    )
}