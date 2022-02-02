import React, { Component } from 'react';

class CallbackRef extends Component {
    constructor() {
        super()

        this.cbRef = 'Hi'
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    handleClick() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    render() { 
        return (
            <div>
                <input ref={this.setCbRef} type="text" />
                <button onClick={() => this.handleClick()}>Click To Focus Input</button>
            </div>
        );
    }
}
 
export default CallbackRef;