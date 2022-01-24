import {useState} from "react";

import {withLayout} from "@/layout";
import {ErrorMessage} from "@/components";

import {SearchPage} from "@/render/public/PublicApplication";

const Search = (): JSX.Element => {
    const [errorApi, setErrorApi] = useState(false);

    return (
        <>
            {errorApi && <ErrorMessage/>}
            {!errorApi && <SearchPage setErrorApi={setErrorApi}/>}
        </>
    )

}

export default withLayout(Search);
