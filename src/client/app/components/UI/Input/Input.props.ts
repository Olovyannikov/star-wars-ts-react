import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    clearHandler: () => void;
}