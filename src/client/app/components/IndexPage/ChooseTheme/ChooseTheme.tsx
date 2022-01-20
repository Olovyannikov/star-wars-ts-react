import Image from 'next/image';

import {Theme, useTheme} from "@/context/Theme.context";

import s from './ChooseTheme.module.scss';

import rebels from './img/rebels.jpeg';
import empire from './img/empire.jpeg';
import neutral from './img/neutral.jpeg';
import cn from "classnames";

export const ChooseTheme = (): JSX.Element => {
    const {theme, setTheme} = useTheme();

    return (
        <ul className={s.list}>
            <li>
                <button className={cn(s.btn, s.light)} onClick={() => setTheme(Theme.Light)}>
                    <Image layout='responsive' src={rebels} alt='Choose Light Theme'/>
                </button>
            </li>
            <li>
                <button className={cn(s.btn, s.dark)} onClick={() => setTheme(Theme.Dark)}>
                    <Image layout='responsive' src={empire} alt='Choose Dark Theme'/>
                </button>
            </li>
            <li>
                <button className={cn(s.btn, s.neutral)} onClick={() => setTheme(Theme.Grey)}>
                    <Image layout='responsive' src={neutral} alt='Choose Neutral Theme'/>
                </button>
            </li>
        </ul>
    )
}