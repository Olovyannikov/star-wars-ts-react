// common
export const HTTPS = 'https://';
export const HTTP = 'http://';

// swapi
export const SWAPI_PEOPLE = 'people'
export const API = process.env.NEXT_PUBLIC_DOMAIN;
export const API_RESERVE = process.env.NEXT_PUBLIC_DOMAIN_RESERVE;
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search='
export const API_PEOPLE = HTTPS + API + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PEOPLE_RESERVE = HTTPS + API_RESERVE + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + API + SWAPI_PEOPLE;
export const API_PERSON_RESERVE = HTTPS + API_RESERVE + SWAPI_PEOPLE;
export const API_SEARCH = HTTPS + API_RESERVE + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH;

// visualguide

const GUIDE_ROOT_IMG = process.env.NEXT_PUBLIC_IMAGES + 'assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;