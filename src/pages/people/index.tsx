import {useState} from "react";
import {withLayout} from "@/layout";
import {ErrorMessage} from "@/components";
import {PeoplePage} from "@/render/public/PublicApplication";

const People = (): JSX.Element => {
    const [errorApi, setErrorApi] = useState<boolean>(false);

    return (
        <>
            {errorApi && <ErrorMessage/>}
            {!errorApi && <PeoplePage setErrorApi={setErrorApi}/>}
        </>
    )
}

export default withLayout(People);