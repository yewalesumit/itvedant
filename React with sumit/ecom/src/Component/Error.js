import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h1>{err.status}</h1>
        <h2>{err.statusText}</h2>
        <p>{err.data}</p>
        <img src="https://support.microsoft.com/images/en-us/bcfbb8c5-a979-49bb-bf10-b21aebc09394"></img>
        </>
    )
}

export default Error;