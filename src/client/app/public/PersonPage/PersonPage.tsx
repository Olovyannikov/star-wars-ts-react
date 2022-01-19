import {lazy, Suspense} from "react";

import {Preloader} from "@/ui";
import {PersonInfo, PersonPhoto, PersonLinkBack} from "@/components";

import s from './PersonPage.module.scss';
import {PersonPageProps} from "./PersonPage.props";

const PersonFilms = lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms').then(({PersonFilms}) => ({default: PersonFilms})))

export const PersonPage = ({peopleName, peoplePhoto, people, films, personID, setPersonFav, personFav}: PersonPageProps) => {
    return (
        <div className={s.wrapper}>
            <PersonLinkBack/>

            {peopleName && <h2 className={s.name}>{peopleName}</h2>}
            <div className={s.info}>
                {peoplePhoto &&
                    <PersonPhoto
                        className={s.image}
                        src={peoplePhoto}
                        alt={peopleName}
                        width={250}
                        height={350}
                        setPersonFav={setPersonFav}
                        personFav={personFav}
                        personID={personID}
                    />
                }
                {people && <PersonInfo people={people}/>}
                {
                    films &&
                    <Suspense fallback={<Preloader/>}>
                        <PersonFilms films={films}/>
                    </Suspense>
                }
            </div>
        </div>
    )
}