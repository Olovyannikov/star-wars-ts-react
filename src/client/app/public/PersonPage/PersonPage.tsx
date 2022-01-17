import {lazy, Suspense} from "react";
import {PersonInfo, PersonPhoto, PersonLinkBack} from "@/components";
import {PersonPageProps} from "./PersonPage.props";
import s from './PersonPage.module.scss';
import {Preloader} from "@/ui";

const PersonFilms = lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms').then(({PersonFilms}) => ({default: PersonFilms})))

export const PersonPage = ({peopleName, peoplePhoto, people, films}: PersonPageProps) => {
    return (
        <div className={s.wrapper}>
            <PersonLinkBack/>

            {peopleName && <h2 className={s.name}>{peopleName}</h2>}
            <div className={s.info}>
                {peoplePhoto &&
                    <PersonPhoto className={s.image} src={peoplePhoto} alt={peopleName} width={250} height={350}/>}
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