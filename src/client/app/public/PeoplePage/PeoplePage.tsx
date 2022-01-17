import {Container, Preloader} from "@/ui";
import {PeopleList, PeopleNavigation} from "@/components";
import {getResources} from "@/utils/network";
import {useEffect, useState} from "react";
import {API_PEOPLE, API_PEOPLE_RESERVE} from "@/constants/constants";
import {PeoplePageProps} from "./PeoplePage.props";
import {useQueryParams} from "@/hooks/useQueryParams";
import {getPeopleId, getPeopleImage, getPeoplePageId} from "@/services/getPeopleData";

export const PeoplePage = ({setErrorApi}: PeoplePageProps): JSX.Element => {
    const [people, setPeople] = useState<[]>([]);
    const [prevPage, setPrevPage] = useState<string>();
    const [nextPage, setNextPage] = useState<string>();
    const [counterPage, setCounterPage] = useState<number>(1);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const query = useQueryParams();
    const queryPage = query.page;

    const getResource = async (url: string) => {
        const res = await getResources(url);

        if (res) {
            const peoples = res.results.map(({name, url}: { name: string, url: string }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            });

            setPeople(peoples);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
            setIsLoading(false);

        } else {
            setErrorApi(true);

        }
    }

    useEffect(() => {
        getResource(API_PEOPLE_RESERVE + queryPage);
    }, [queryPage]);

    return (
        <section>
            <Container>
                <PeopleNavigation
                    prevPage={prevPage}
                    nextPage={nextPage}
                    counterPage={counterPage}
                />
                {isLoading && <Preloader/>}
                {people && <PeopleList people={people}/>}
            </Container>
        </section>
    )
}