import {withLayout} from "@/layout";
import {Error404Page} from "../client/app/public/PublicApplication";

const Error404 = (): JSX.Element => {
    return <Error404Page/>
}

export default withLayout(Error404);