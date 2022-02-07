import { useRef } from "react";

const FunctionalComponentFocusInput = () => {
    const inputRef = useRef(null)

    return (
        <div>
            <h3>Functional component - Focus input</h3>
            <input ref={inputRef} type="text" />
            <button onClick={() => inputRef.current.focus()}>Click to focus input</button>
        </div>
    );
}
 
export default FunctionalComponentFocusInput;