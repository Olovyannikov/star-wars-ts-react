import cn from "classnames";

import s from './ErrorMessage.module.scss';
import {ErrorMessageProps} from "./ErrorMessage.props";

export const ErrorMessage = ({className, ...props}: ErrorMessageProps): JSX.Element =>
    <div className={s.error}>
        <h2 className={cn(s.message, className)} {...props}>
            The dark side of the force has won. <br/>
            We Cannot display Data. <br/>
            Come back when we fix everything <br/>
        </h2>
    </div>

