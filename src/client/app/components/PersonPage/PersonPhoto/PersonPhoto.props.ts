import {ImageProps} from "next/image";

export interface PersonPhotoProps extends ImageProps{
    personID: any;
    personFav: boolean;
    setPersonFav: (b: boolean) => void;
}