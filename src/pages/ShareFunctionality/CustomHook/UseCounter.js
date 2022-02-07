import useCounter from "../../../components/share-functionality/custom-hook/useCounter";

const UseCounter = () => {
    const [countOne, incrementOne, decrementOne, resetOne] = useCounter()
    const countTwoStepNum = 5
    const [countTwo, incrementTwo, decrementTwo, resetTwo] = useCounter(10, countTwoStepNum)
    return (
        <div>
            <h3>useCounter</h3>
            <p>Handle count state, increment, decrement, and reset</p>
            <div>
                <h4>Count Demo: One</h4>
                <p>Count value - {countOne}</p>
                <button onClick={incrementOne}>Increment 1</button>
                <button onClick={decrementOne}>Decrement 1</button>
                <button onClick={resetOne}>Reset</button>
            </div>
            <hr />
            <div>
                <h4>Count Demo: Two</h4>
                <p>Count value - {countTwo}</p>
                <button onClick={incrementTwo}>Increment {countTwoStepNum}</button>
                <button onClick={decrementTwo}>Decrement {countTwoStepNum}</button>
                <button onClick={resetTwo}>Reset</button>
            </div>
        </div>
    );
}
 
export default UseCounter;