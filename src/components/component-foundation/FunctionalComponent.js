import { useState } from 'react'

const App = ({ name, greet }) => {
    const [counter, setCounter] = useState(0)
    const [addNumber, setAddNumber] = useState(1)
    const [isLogin, setIsLogin] = useState(true)
    
    // conditional-rendering-part
    function switchLogin() {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            <div className="props-part">
                <h3>Handle props in functional compoennt</h3>
                <p>Hello {name}</p>
            </div>
            <div className="state-part">
                <h3>Handle state in functional component</h3>
                <p>current count: {counter}</p>
                <button onClick={() => setCounter(counter + addNumber)}>Click to add {addNumber}</button>
                <input type="number" value={addNumber} onChange={e => setAddNumber(Number(e.target.value))} />
            </div>
            <div className="methods-as-props-part">
                <h3>Passing method from parent component</h3>
                <button onClick={() => greet()}>Greet</button>
            </div>
            <div className="conditional-rendering-part">
                <h3>Conditional rendering</h3>
                <button onClick={() => switchLogin()}>Switch login</button>                
                <div className="way-1">
                    {
                        isLogin ? (
                            <p>Hello member!</p>
                        ) : (
                            <p>Hello guest!</p>
                        )
                    }
                </div>
                <div className="way-2">
                    {
                        isLogin && <p>Hello member!</p>
                    }
                    {
                        !isLogin && <p>Hello guest!</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default App