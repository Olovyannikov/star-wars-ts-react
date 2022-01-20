import cn from "classnames";
import s from './Title.module.scss'
import {TitleProps} from "./Title.props";
import {Theme, useTheme} from "@/context/Theme.context";

export const Title = ({variant = 'h1', children, className, ...props}: TitleProps): JSX.Element => {
    const {theme, setTheme} = useTheme();

    switch (variant) {
        case 'h1':
            return <h1 className={cn(className, s.title, {
                [s.dark]: theme === Theme.Dark,
                [s.grey]: theme === Theme.Grey
            })} {...props}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(className, s.title, {
                [s.dark]: theme === Theme.Dark,
                [s.grey]: theme === Theme.Grey
            })} {...props}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(className, s.title, {
                [s.dark]: theme === Theme.Dark,
                [s.grey]: theme === Theme.Grey
            })} {...props}>{children}</h3>;
        default:
            return <></>
    }
}