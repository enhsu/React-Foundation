import React, { Component } from 'react';
import Counter from "./Counter";

class ClickCount extends Component {
    render() {
        const { name, count, incrementCount } = this.props
        return (
            <div>
                <button onClick={() => incrementCount()}>{name} Click {count} time{count === 0 ? '' : 's'}</button>
            </div>
        );
    }
}
 
export default Counter(ClickCount, 5);