import { SVGProps } from "react"

export const PersonFavoriteImage = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m16.842 3.548 3.29 6.984c.137.29.401.491.707.538l7.357 1.12c.77.117 1.077 1.108.52 1.677l-5.324 5.436a1.013 1.013 0 0 0-.27.87l1.257 7.676c.131.803-.673 1.416-1.362 1.036l-6.58-3.624a.898.898 0 0 0-.873 0l-6.58 3.624c-.688.379-1.493-.233-1.362-1.036l1.257-7.676a1.013 1.013 0 0 0-.27-.87l-5.324-5.436c-.557-.569-.25-1.56.52-1.677l7.357-1.12a.945.945 0 0 0 .707-.538l3.29-6.984a.92.92 0 0 1 1.683 0z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        />
    </svg>
)