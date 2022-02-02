import { useState } from "react";

const LogicCount = (ChildComponent, increamentNumber = 1) => {
    const WrapComponent = (props) => {
        const [count, setCount] = useState(0)
        const incrementCount = () => {
            setCount(count + increamentNumber)
        }
        return (
            <ChildComponent
                count={count}
                incrementCount={incrementCount}
                {...props}
            />
        );
    }
    return WrapComponent;
}
 
export default LogicCount;