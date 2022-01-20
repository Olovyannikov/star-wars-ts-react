import {withLayout} from "@/layout";
import {IndexPage} from "@/render/public/PublicApplication";

const Index = (): JSX.Element => {
    return (
        <IndexPage/>
    )
}

export default withLayout(Index);