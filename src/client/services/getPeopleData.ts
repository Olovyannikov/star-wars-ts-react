import {API, GUIDE_IMG_EXTENSION, HTTP, HTTPS, SWAPI_PEOPLE, URL_IMG_PERSON} from "@/constants/constants";

const checkProtocol = (url: string) => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

const getId = (url: string, category: string): string => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol + API + category, '')
        .replace(/\//g, '')
    return id;
}

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id: number | string): string => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;