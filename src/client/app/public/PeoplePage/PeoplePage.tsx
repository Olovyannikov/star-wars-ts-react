import Image from "next/image";
import {getResources} from "@/utils/api";
import {useEffect, useState} from "react";
import {API_PEOPLE} from "@/constants/constants";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";
import {PeopleList} from "@/components";

export const PeoplePage = (): JSX.Element => {
    const [people, setPeople] = useState([]);

    const getResource = async (url: string) => {
        const res = await getResources(url);

        const peoples = res.results.map(({name, url}: { name: string, url: string }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id);

            return {
                id,
                name,
                img
            }
        });

        setPeople(peoples)
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, []);

    return (
        <>
            {people && <PeopleList people={people}/>}
        </>
    )
}