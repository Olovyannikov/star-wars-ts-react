import {withLayout} from "@/layout";
import {FavoritePage} from "@/render/public/FavoritePage/FavoritePage";

const Favorites = (): JSX.Element => {
    return <FavoritePage/>
}

export default withLayout(Favorites);