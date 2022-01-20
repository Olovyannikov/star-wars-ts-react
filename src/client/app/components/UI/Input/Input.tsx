import {InputProps} from "./Input.props";
import cn from "classnames";

export const Input = ({className, ...props}: InputProps): JSX.Element => {
    return (
        <label>
            <input className={cn(className)} {...props}/>
        </label>
    )
}