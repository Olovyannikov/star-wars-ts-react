import cn from "classnames";

import s from './Input.module.scss';
import {InputProps} from "./Input.props";
import {useRef} from "react";

export const Input = ({className, clearHandler,  ...props}: InputProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <label className={s.label}>
            <input
                className={cn(className, s.input)}
                ref={inputRef}
                {...props}
            />
            <button
                className={s.cancel}
                aria-label="Clear input value"
                onClick={clearHandler}
                disabled={(inputRef.current && inputRef.current.value.length === 0) || false}
            />
        </label>
    )
}