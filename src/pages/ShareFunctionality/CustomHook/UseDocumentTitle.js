import { useState } from "react";
import useDocumentTitle from "../../../components/share-functionality/custom-hook/useDocumentTitle";

const UseDocumentTitle = () => {
    const [count, setCount] = useState(0)
    
    useDocumentTitle(count)
    
    return (
        <div>
            <h3>useDocumentTitle</h3>
            <p>Handle document title while value change</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}, Click to increase</button>
        </div>
    );
}
 
export default UseDocumentTitle;