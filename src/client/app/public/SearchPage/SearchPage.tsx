import {ChangeEvent, useEffect, useState} from "react";

import {Container, Input, Title} from "@/ui";

import {getResources} from "@/utils/network";
import {API_SEARCH} from "@/constants/constants";

import {SearchPageProps} from "./SearchPage.props";
import {getPeopleId, getPeopleImage} from "@/services/getPeopleData";
import {SearchPageInfo} from "@/client/app/components/SearchPage";

export const SearchPage = ({setErrorApi}: SearchPageProps): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [results, setResults] = useState(null);

    const getResponse = async (params: string) => {
        const res = await getResources(params);

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

            setResults(peoples);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        (async () => {
            await getResponse(API_SEARCH + '')
        })();
    }, [results]);

    const inputChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setValue(e.target.value);
        await getResponse(API_SEARCH + val);
    }

    return (
        <section>
            <Container>
                <Title>Search</Title>
                <Input
                    value={value}
                    placeholder='Search here...'
                    onChange={inputChangeHandler}
                />
                {results && <SearchPageInfo people={results}/>}
            </Container>
        </section>
    )
}

