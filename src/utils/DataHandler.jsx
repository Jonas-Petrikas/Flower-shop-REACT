import { DotLoader } from "react-spinners"

export default function DataHandler({ loading, error, children }) {


    if (loading) {
        return (

            <DotLoader color='#50806B' />

        )
    }
    if (error) {
        return (
            <>
                Error: {error}
            </>



        )
    }
    return children;

}