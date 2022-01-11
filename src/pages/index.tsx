import {withLayout} from "@/layout";
import {IndexPage} from "../client/app/public/PublicApplication";

const Index = (): JSX.Element => {
    return (
        <IndexPage/>
    )
}

export default withLayout(Index);