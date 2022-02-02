import { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props) // for inherit
        
        this.handlCounterByBindThis = this.handlCounterByBindThis.bind(this)
    }

    state = {
        counter: 0,
        addNumber: 3,
        isLogin: true
    }

    // state-part
    handlCounterByBindThis() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    handleCounterWithPublicClassFieldSyntax = () => {
        this.setState({
            counter: this.state.counter + 2
        })
    }
    handleCounterWithArrowFunction(num) {
        // With arrow function can pass parameters to the function
        this.setState({
            counter: this.state.counter + num
        })
    }

    // conditional-rendering-part
    switchLogin() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        const { name, greet } = this.props
        return (
            <div>
                <div className="props-part">
                    <h3>Handle props in class component</h3>
                    <p>Hello {name}!</p>
                </div>
                <div className="state-part">
                    <h3>Handle state in class component</h3>
                    <p>current count: {this.state.counter}</p>
                    <button onClick={this.handlCounterByBindThis}>Click to add 1</button>
                    <button onClick={this.handleCounterWithPublicClassFieldSyntax}>Click to add 2</button>
                    <button onClick={() => this.handleCounterWithArrowFunction(this.state.addNumber)}>Click to add {this.state.addNumber}</button>
                    <input type="number" value={this.state.addNumber} onChange={(e) => this.setState({ addNumber: Number(e.target.value) })}></input>
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
                            this.state.isLogin ? (
                                <p>Hello member!</p>
                            ) : (
                                <p>Hello guest!</p>
                            )
                        }
                    </div>
                    <div className="way-2">
                        {
                            this.state.isLogin && <p>Hello member!</p>
                        }
                        {
                            !this.state.isLogin && <p>Hello guest!</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App