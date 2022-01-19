export interface PersonPageProps {
    peopleName: string | undefined;
    peoplePhoto: string | StaticImageData | undefined;
    people: [
        {title: string, data: string}
    ];
    films: string[];
    personID: string | string[] | undefined;
    personFav: boolean;
    setPersonFav: (b: boolean) => void;
}