import { Component, createRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

class ForwardRef extends Component {
    constructor() {
        super()

        this.componentRef = createRef()
    }

    handleClick() {
        this.componentRef.current.focus()
    }

    render() { 
        return (
            <div>
                <h3>React.forwardRef demo</h3>
                <ForwardRefChild ref={this.componentRef} />
                <button onClick={() => this.handleClick()}>Click to focus input</button>
            </div>
        );
    }
}
 
export default ForwardRef;