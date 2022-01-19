import {useRouter} from "next/router";
import {SetStateAction, useEffect, useState} from "react";

import {getResources} from "@/utils/network";
import {API_PERSON, API_PERSON_RESERVE} from "@/constants/constants";

import {Container, Preloader} from "@/ui";

import {Error404Page} from "../../../public/Error404Page/Error404Page";
import {getPeopleImage} from "@/services/getPeopleData";
import {PersonPage} from "../../../public/PersonPage/PersonPage";
import {useSelector} from "react-redux";

export const PersonItem = (): JSX.Element => {
    const router = useRouter();

    const [personID, setPersonID] = useState<string | string[] | undefined>('');
    const [people, setPeople] = useState<SetStateAction<any> | undefined>(null);
    const [peopleName, setPeopleName] = useState<string | undefined>('');
    const [peoplePhoto, setPeoplePhoto] = useState<string | StaticImageData>();
    const [peopleFilms, setPeopleFilms] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [personFav, setPersonFav] = useState<boolean>(false);

    const storeData = useSelector((state: { favoriteReducer: any }) => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const id = `${router.query.id}`;
            const res = await getResources(API_PERSON_RESERVE + '/' + id + '/');

            setPersonID(id);
            setPersonFav(!!storeData[id]);

            if (res) {
                setPeople([
                    {title: 'Gender', data: res.gender},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Height', data: res.height},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                ]);
                setPeopleName(res.name);
                setPeoplePhoto(getPeopleImage(id));
                setPeopleFilms(res.films);

                setIsLoading(false);
            } else if (!res) {
                setPeople(null);
                setIsLoading(true);
            }
        })();
    }, []);

    return (
        <section>
            <Container>
                {isLoading && <Preloader/>}
                {
                    people &&
                    <PersonPage
                        people={people}
                        films={peopleFilms}
                        peopleName={peopleName}
                        peoplePhoto={peoplePhoto}
                        personID={personID}
                        personFav={personFav}
                        setPersonFav={setPersonFav}
                    />}
                {!people && !isLoading && <Error404Page/>}
            </Container>
        </section>
    )
};