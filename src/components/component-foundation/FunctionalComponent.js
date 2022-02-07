import { useState } from 'react'

const App = ({ name, greet }) => {
    // primitive value
    const [count, setCount] = useState(0)
    const [addNumber, setAddNumber] = useState(1)
    const [isLogin, setIsLogin] = useState(true)
    // object
    const [username, setUsername] = useState({
        firstname: '',
        lastname: ''
    })
    // array
    const [items, setItems] = useState([])

    // primitive-value-part
    const handleAddCount = () => {
        setCount(prevCount => prevCount + addNumber)
    }
    // object-part
    const handleUpdateUsername = (e) => {
        setUsername(prevName => ({
            ...prevName,
            [e.target.getAttribute('data-name')]: e.target.value
        }))
    }
    // array-part
    const handleAddItem = () => {
        setItems(prevItems => ([
            ...prevItems,
            {
                id: prevItems.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ]))
    }
    // conditional-rendering-part
    const switchLogin = () => {
        setIsLogin(prevIsLogin => !prevIsLogin)
    }

    return (
        <div>
            <div className="props-part">
                <h3>Handle props in functional compoennt</h3>
                <p>Hello {name}</p>
            </div>
            <div className="state-part">
                <h3>Handle state in functional component</h3>
                <div className='primitive-value-part'>
                    <h4>State with primitive value</h4>
                    <p>current count: {count}</p>
                    <button onClick={() => handleAddCount()}>Click to add {addNumber}</button>
                    <input type="number" value={addNumber} onChange={e => setAddNumber(Number(e.target.value))} />
                </div>
                <div className='object-part'>
                    <h4>State with object</h4>
                    <form>
                        <label htmlFor="firstname">firstname: </label>
                        <input id="firstname" type="text" data-name="firstname" value={username.firstname} onChange={(e) => handleUpdateUsername(e)} />
                        <br />
                        <label htmlFor="lastname">lastname: </label>
                        <input id="lastname" type="text" data-name="lastname" value={username.lastname} onChange={(e) => handleUpdateUsername(e)} />
                        <p>username object data: {JSON.stringify(username)}</p>
                    </form>
                </div>
                <div className='array-part'>
                    <h4>State with array</h4>
                    <button onClick={() => handleAddItem()}>Add Random Number</button>
                    <ul>
                        {items.map(item => {
                            return (
                                <li key={item.id}>{item.value}</li>
                            )
                        })}
                    </ul>
                </div>
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