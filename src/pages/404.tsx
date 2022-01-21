import {withLayout} from "@/layout";
import {Error404Page} from "@/render/public/PublicApplication";

const Error404 = (): JSX.Element => {
    return <Error404Page/>
}

export default withLayout(Error404);