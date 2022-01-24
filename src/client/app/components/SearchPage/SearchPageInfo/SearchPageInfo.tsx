import Link from 'next/link';
import Image from 'next/image';

import s from './SearchPageInfo.module.scss';
import {SearchPageInfoProps} from "./SearchPageInfo.props";

export const SearchPageInfo = ({people}: SearchPageInfoProps) => {
    return (
        <>
            {!people.length && <h2 className={s.error}>No Data</h2>}
            {people &&
                <ul className={s.list}>
                    {people.map(({id, name, img}) => (
                        <li className={s.item} key={id}>
                            <Link href={`/person/${id}`}>
                                <a className={s.link}>
                                    <Image
                                        src={img}
                                        alt={name}
                                        width={150}
                                        height={150}
                                        priority
                                        layout='responsive'
                                        objectPosition='top center'
                                    />
                                    <p>{name}</p>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}