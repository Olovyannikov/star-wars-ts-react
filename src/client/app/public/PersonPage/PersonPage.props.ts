export interface PersonPageProps {
    peopleName: string | undefined;
    peoplePhoto: string | StaticImageData | undefined;
    people: [
        {title: string, data: string}
    ];
    films: string[];
}