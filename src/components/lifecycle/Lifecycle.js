import { Component } from "react";

class Lifecycle extends Component {
    constructor({ name, lifecycle, children }) {
        super()

        console.log(`Component ${name} constructor`)
    }

    state = {
        count: 0
    }

    static getDerivedStateFromProps(props, state) {
        const { name } = props
        console.log(`Component ${name} getDerivedStateFromProps`)

        return state
    }

    componentDidMount() {
        const { name } = this.props
        console.log(`Component ${name} componentDidMount`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { name } = this.props
        console.log(`Component ${name} shouldComponentUpdate`)
        
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const { name } = this.props
        console.log(`Component ${name} getSnapshotBeforeUpdate`)
        
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { name } = this.props
        console.log(`Component ${name} componentDidUpdate`)
    }

    handleAddCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { name, lifecycle, children } = this.props
        console.log(`Component ${name} render`)
        
        return (
            <div>
                Lifecycle Component: { name }
                {
                    lifecycle === 'updating' &&
                    <>
                        <p>Counter: {this.state.count}</p>
                        <button onClick={() => this.handleAddCount()}>Add counter</button>
                    </>
                }
                { children }
            </div>
        )
    }
}

export default Lifecycle