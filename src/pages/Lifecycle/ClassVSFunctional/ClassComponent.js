import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            text: '',
            position: {
                x: 0,
                y: 0
            }
        }
    }

    // Lifecycle
    componentDidMount() {
        const { count } = this.state
        console.log('********** component did mount **********')
        document.title = `Clicked ${count} time${count === 0 ? '' : 's'}`
        window.addEventListener('mousemove', this.logMousePosition)
    }
    componentDidUpdate( prevProps, prevState ) {
        const { count } = this.state
        console.log('********** component did update **********')
        if (prevState.count !== this.state.count) {
            console.log('update document title')
            document.title = `Clicked ${count} time${count === 0 ? '' : 's'}`    
        }
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    // event handlers
    handleIncrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    handleInputChange = (text) => {
        this.setState({
            text: text
        })
    }
    logMousePosition = (e) => {
        this.setState({
            position: {
                x: e.clientX,
                y: e.clientY
            }
        })
    }

    render() { 
        const { count, text, position } = this.state
        return (
            <div>
                <div className='render-update-part'>
                    <h3>Update title after render and state update</h3>
                    <button onClick={() => this.handleIncrementCount()}>Click {count} time{count === 0 ? '' : 's'}</button>
                </div>
                <div className='conditional-update-part'>
                    <h3>Update input won't trigger update document title</h3>
                    <input type="text" value={text} onChange={(e) => this.handleInputChange(e.target.value)} />
                </div>
                <div className='render-part'>
                    <h3>Mouse position</h3>
                    <p>X: {position.x}, Y: {position.y}</p>
                </div>
            </div>
        );
    }
}
 
export default ClassComp;