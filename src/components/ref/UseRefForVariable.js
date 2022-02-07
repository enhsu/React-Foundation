import { useEffect, useState, useRef } from "react";


const UseRefForVariable = () => {
    const [timer, setTimer] = useState(0)
    const timerInterval = useRef()

    useEffect(() => {
        timerInterval.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(timerInterval.current)
        }
    }, [])

    return (
        <div>
            <h3>Clear timer while click button</h3>
            <div>Timer - { timer }</div>
            <button onClick={() => clearInterval(timerInterval.current)}>Stop Timer</button>
        </div>
    );
}
 
export default UseRefForVariable;