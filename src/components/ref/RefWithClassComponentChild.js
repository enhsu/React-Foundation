import React, { Component, createRef } from 'react';


class InputComp extends Component {
    constructor() {
        super()

        this.inputRef = createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }
 
    render() { 
        return (
            <input ref={this.inputRef} type="text" />
        );
    }
}
 
export default InputComp;