import {SVGProps, useEffect, useState} from "react";

import s from './FavoriteIcon.module.scss';
import {useSelector} from "react-redux";

export const FavoriteIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const [count, setCount] = useState('0');

    const storeData = useSelector((state: {favoriteReducer: {}}) => state.favoriteReducer);

    useEffect(() => {
        const len = Object.keys(storeData).length;
        setCount(len > 99 ? '...' : len.toString());
    });

    return (
        <div className={s.icon}>
            <span className={s.counter}>{count}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
                <path
                    d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21Z"
                    fill='currentColor'
                />
            </svg>
        </div>
    )
}