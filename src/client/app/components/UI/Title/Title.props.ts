import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children?: ReactNode;
    variant?: 'h1' | 'h2' | 'h3'
}