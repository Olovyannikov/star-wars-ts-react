import s from './PersonInfo.module.scss';
import {PeopleInfoProps} from "./PeopleInfo.props";

export const PersonInfo = ({people}: PeopleInfoProps):JSX.Element => {
    return (
        <ul className={s.list}>
            {people.map(({title, data}: { title: string, data: string}) =>
                <li className={s.item} key={title}>
                    <span className={s.data}>
                        <u>{title}</u>: {data}
                    </span>
                </li>
            )}
        </ul>
    )
}