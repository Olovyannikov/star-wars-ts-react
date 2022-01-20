import cn from "classnames";

import s from './Container.module.scss';
import {ContainerProps} from "./Container.props";

export const Container = ({className, children, ...props}: ContainerProps): JSX.Element => {
    return (
        <div className={cn(s.container, className)} {...props}>{children}</div>
    )
}