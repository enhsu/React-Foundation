import { useState } from "react";


const useCounter = (initialNum = 0, stepNum = 1) => {
    const [count, setCount] = useState(initialNum)
    const increment = () => {
        setCount(prevCount => prevCount + stepNum)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - stepNum)
    }
    const reset = () => {
        setCount(initialNum)
    }

    return [count, increment, decrement, reset]
}
 
export default useCounter;