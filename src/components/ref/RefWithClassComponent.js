import RefWithClassComponentChild from "./RefWithClassComponentChild";
import React, { Component, createRef } from 'react';



class RefWithClassComponent extends Component {
    constructor() {
        super()

        this.inputComponentRef = createRef()
    } 

    handleClick() {
        this.inputComponentRef.current.focusInput()
    }

    render() { 
        return (
            <div>
                <h3>Ref with class component</h3>
                <RefWithClassComponentChild ref={this.inputComponentRef} />
                <button onClick={() => this.handleClick()}>Focus children input</button>
            </div>
        );
    }
}
 
export default RefWithClassComponent;