import {withLayout} from "@/layout";
import {PeoplePage} from "../../client/app/public/PublicApplication";

const People = (): JSX.Element => {
    return (
        <PeoplePage/>
    )
}

export default withLayout(People);