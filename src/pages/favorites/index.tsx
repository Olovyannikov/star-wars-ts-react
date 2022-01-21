import {withLayout} from "@/layout";
import {FavoritePage} from "@/render/public/PublicApplication";

const Favorites = (): JSX.Element => {
    return <FavoritePage/>
}

export default withLayout(Favorites);