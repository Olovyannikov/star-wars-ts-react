import cn from "classnames";

import {Video} from "@/ui";

import s from './ErrorMessage.module.scss';
import {ErrorMessageProps} from "./ErrorMessage.props";

export const ErrorMessage = ({className, ...props}: ErrorMessageProps): JSX.Element => {

    return (
        <div className={s.error}>
            <h2 className={cn(s.message, className)} {...props}>
                The dark side of the force has won. <br/>
                We Cannot display Data. <br/>
                Come back when we fix everything <br/>
            </h2>

            <Video
                className={s.video}
                src='/video/han-solo.mp4'
            />
        </div>
    )
}

