import cn from "classnames";
import Link from 'next/link';
import s from './Button.module.scss';
import {ButtonProps} from "./Button.props";

export const Button = ({
                           variant = 'primary',
                           theme = 'dark',
                           href,
                           className,
                           children,
                           disabled,
                           ...props
                       }: ButtonProps): JSX.Element => {

    if (href && href.length > 0) {
        return (
            <Link href={href}>
                <a
                    className={cn(className, s.btn, s[variant], s[theme], {[s.disabled]: disabled})}
                    aria-disabled={disabled}
                >
                    {children}
                </a>
            </Link>)
    }

    return (
        <button className={cn(className, s.btn, s[variant], s[theme], {[s.disabled]: disabled})} disabled={disabled} {...props}>
            {children}
        </button>
    )
}
