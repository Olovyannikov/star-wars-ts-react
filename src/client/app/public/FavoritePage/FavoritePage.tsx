import {useSelector} from "react-redux";

import {Container, Title} from "@/ui";
import {useEffect, useState} from "react";
import {PeopleList} from "@/components";

import s from './FavoritePage.module.scss';

export const FavoritePage = (): JSX.Element => {
    const storeData = useSelector((state: { favoriteReducer: {} }) => state.favoriteReducer);

    const [people, setPeople] = useState<any>([]);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map((i: Array<any>) => ({
                id: i[0],
                ...i[1]
            }));

            setPeople(res);
        }
    }, []);

    return (
        <section>
            <Container>
                <Title>Favorites</Title>
                {
                    people.length ? <PeopleList people={people}/>
                        :
                        <h2 className={s.noData}>No Data Found!</h2>
                }
            </Container>
        </section>
    )
};