import {useEffect, useState} from "react";

import {makeConcurrentRequest} from "@/utils/network";

import s from './PersonFilms.module.scss';
import {PersonFilmsProps} from "./PersonFilms.props";

export const PersonFilms = ({films}: PersonFilmsProps): JSX.Element => {
    const [filmsName, setFilmsName] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const filmsRequest = await makeConcurrentRequest(films);
            setFilmsName(filmsRequest);
        })();
    }, [films]);

    return (
        <ul className={s.list}>
            {
                filmsName
                    .sort((a: { episode_id: number }, b: { episode_id: number }) => a.episode_id - b.episode_id)
                    .map((i: { title: string, episode_id: string }) => (
                        <li key={i.title} className={s.item}>
                            <span className={s.episode}>Episode {i.episode_id}</span>
                            <span> : </span>
                            <span className={s.title}>{i.title}</span>
                        </li>
                    ))
            }
        </ul>
    )
};