import Image from "next/image";
import s from './PersonPhoto.module.scss';
import {PersonPhotoProps} from "./PersonPhoto.props";

export const PersonPhoto = (props: PersonPhotoProps): JSX.Element => {
    return (
        <div className={s.image}>
            <Image {...props} priority={true} />
        </div>
    )
}