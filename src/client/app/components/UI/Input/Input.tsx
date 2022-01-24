import cn from "classnames";

import {InputProps} from "./Input.props";

export const Input = ({className, ...props}: InputProps): JSX.Element => {
    return (
        <label>
            <input className={cn(className)} {...props}/>
        </label>
    )
}