import {
    API, API_RESERVE,
    GUIDE_IMG_EXTENSION,
    HTTP,
    HTTPS,
    SWAPI_PARAM_PAGE,
    SWAPI_PEOPLE,
    URL_IMG_PERSON
} from "@/constants/constants";

const checkProtocol = (url: string): string => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

export const getPeoplePageId = (url: string): number => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length);

    return Number(id);
}


const getId = (url: string, category: string): string => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol + API_RESERVE + category, '')
        .replace(/\//g, '')
    return id;
}

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = (id: string | string[] | undefined): string => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;