import {Button} from "@/ui";

import s from './PeopleNavigation.module.scss';
import {PeopleNavigationProps} from "./PeopleNavigation.props";

export const PeopleNavigation = ({
                                     counterPage,
                                     prevPage,
                                     nextPage
                                 }: PeopleNavigationProps): JSX.Element => {
    return (
        <div className={s.nav}>
            <Button
                href={`/people?page=${counterPage - 1}`}
                disabled={prevPage === null}
            >
                Prev
            </Button>
            <Button
                href={`/people?page=${counterPage + 1}`}
                disabled={nextPage === null}
            >
                Next
            </Button>
        </div>
    )
}