import cn from "classnames";
import {ForwardedRef, forwardRef, useEffect, useRef} from "react";

import s from './Video.module.scss';
import {VideoProps} from "./Video.props";

export const Video = ({
                          className,
                          src,
                          autoPlay = true,
                          muted = true,
                          loop = true,
                          playbackRate = 1.0,
                          ...props
                      }: VideoProps): JSX.Element => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (typeof playbackRate === "number" && videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, []);

    return (
        <video
            className={cn(s.video, className)}
            ref={videoRef}
            {...props}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
        >
            <source
                src={src}
            />
        </video>
    )
}
