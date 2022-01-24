import Image from 'next/image';
import Link from 'next/link';

import s from './SearchPageInfo.module.scss';
import {SearchPageInfoProps} from "./SearchPageInfo.props";

export const SearchPageInfo = ({people}: SearchPageInfoProps) => {
    return (
        <>
            {!people && <h2 className={s.error}>No Data</h2>}
            {people &&
                <ul className={s.list}>
                    {people.map(({id, name, img}) => (
                        <li className={s.item} key={id}>
                            <Link href={`/person/${id}`}>
                                <a className={s.link}>
                                    <Image src={img} alt={name} layout='responsive'/>
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