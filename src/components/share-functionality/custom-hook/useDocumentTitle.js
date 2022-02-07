import { useEffect } from "react";

const useDocumentTitle = (value) => {
    useEffect(() => {
        document.title = `Count - ${value}`

        return () => {
            document.title = `React App`
        }
    }, [value])
}
 
export default useDocumentTitle;