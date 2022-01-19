import Image from "next/image";
import {useDispatch} from "react-redux";

import {setPersonToFavorite, removePersonFromFavorite} from "@/store/actions";

import s from './PersonPhoto.module.scss';
import {PersonPhotoProps} from "./PersonPhoto.props";

import fav from './fav.svg';
import {PersonFavoriteImage} from "../PersonFavoriteImage/PersonFavoriteImage";

export const PersonPhoto = ({personID, setPersonFav, personFav, ...props}: PersonPhotoProps): JSX.Element => {
    const dispatch = useDispatch();

    const dispatchFavPeople = () => {
        if (personFav) {
            dispatch(removePersonFromFavorite(personID));
            setPersonFav(false);
        } else {
            dispatch(setPersonToFavorite({
                [personID]: {
                    name: props.alt,
                    img: props.src,
                }
            }));
            setPersonFav(true);
        }
    }

    return (
        <div className={s.content}>
            <div className={s.image}>
                <button
                    className={s.btn}
                    onClick={dispatchFavPeople}
                    aria-label="Add to Favorites"
                    aria-pressed={personFav}
                >
                    <PersonFavoriteImage
                        className={s.icon}
                        width={32}
                        height={32}
                        color={personFav ? 'yellow' : 'none'}
                    />
                </button>
                <Image {...props} priority={true}/>
            </div>
        </div>
    )
}