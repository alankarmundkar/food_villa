import { useRouteError } from "react-router-dom"
const Error =()=>{
    const err = useRouteError()
    const { status ,statusText} = err
    return(
        <div>
            <h1>
                Oops!!
            </h1>
            <h1>
                Something Went wrong
            </h1>
            <h1>{status}: {statusText}</h1>
        </div>
    )
}

export default Error