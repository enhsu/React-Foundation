import React, { Component, createRef } from 'react';

class FocusInput extends Component {
    constructor() {
        super()

        this.inputRef = createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleClick() {
        alert(this.inputRef.current.value)
    }
    
    state = {  }
    render() { 
        return (
            <div>
                <h3>Class Component - Focus input while page loaded</h3>
                <input ref={this.inputRef} type="text" />
                <button onClick={() => this.handleClick()}>Get input value</button>
            </div>
        );
    }
}
 
export default FocusInput;