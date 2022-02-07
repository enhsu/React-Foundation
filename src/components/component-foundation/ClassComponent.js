import { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props) // for inherit
        
        this.handlCounterByBindThis = this.handlCounterByBindThis.bind(this)
    }

    state = {
        counter: 0,
        addNumber: 3,
        isLogin: true,
        username: {
            firstname: '',
            lastname: ''
        },
        items: []
    }

    // primitive-value-part
    handlCounterByBindThis() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
    handleCounterWithPublicClassFieldSyntax = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 2
            }
        })
    }
    handleCounterWithArrowFunction(num) {
        // With arrow function can pass parameters to the function
        this.setState(prevState => {
            return {
                counter: prevState.counter + num
            }
        })
    }
    // object-part
    handleUpdateUsername = (e) => {
        this.setState(prevState => ({
            username: {
                ...prevState.username,
                [e.target.getAttribute('data-name')]: e.target.value
            }
        }))
    }
    // array-part
    handleAddItem = () => {
        this.setState(prevState => ({
            items: [
                ...prevState.items,
                {
                    id: prevState.items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ]
        }))
    }

    // conditional-rendering-part
    switchLogin() {
        this.setState(prevState => {
            return {
                isLogin: !prevState.isLogin
            }
        })
    }

    render() {
        const { name, greet } = this.props
        const { counter, addNumber, isLogin, username, items } = this.state
        return (
            <div>
                <div className="props-part">
                    <h3>Handle props in class component</h3>
                    <p>Hello {name}!</p>
                </div>
                <div className="state-part">
                    <h3>Handle state in class component</h3>
                    <div className='primitive-value-part'>
                        <h4>State with primitive value</h4>
                        <p>current count: {counter}</p>
                        <button onClick={this.handlCounterByBindThis}>Click to add 1</button>
                        <button onClick={this.handleCounterWithPublicClassFieldSyntax}>Click to add 2</button>
                        <button onClick={() => this.handleCounterWithArrowFunction(addNumber)}>Click to add {addNumber}</button>
                        <input type="number" value={addNumber} onChange={(e) => this.setState({ addNumber: Number(e.target.value) })}></input>
                    </div>
                    <div className='object-part'>
                        <h4>State with object</h4>
                        <form>
                            <label htmlFor="firstname">firstname: </label>
                            <input id="firstname" type="text" data-name="firstname" value={username.firstname} onChange={(e) => this.handleUpdateUsername(e)} />
                            <br />
                            <label htmlFor="lastname">lastname: </label>
                            <input id="lastname" type="text" data-name="lastname" value={username.lastname} onChange={(e) => this.handleUpdateUsername(e)} />
                            <p>username object data: {JSON.stringify(username)}</p>
                        </form>
                    </div>
                    <div className='array-part'>
                        <h4>State with array</h4>
                        <button onClick={() => this.handleAddItem()}>Add Random Number</button>
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
                    <button onClick={() => this.switchLogin()}>Switch login</button>
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
}

export default App