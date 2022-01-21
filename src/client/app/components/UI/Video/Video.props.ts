import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface VideoProps extends DetailedHTMLProps<HTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    src?: string;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    playbackRate?: number;
}