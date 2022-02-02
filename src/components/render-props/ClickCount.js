import React, { Component } from 'react';

class ClickCount extends Component {
    render() { 
        const { count, incrementCount, sayHi } = this.props
        sayHi()
        return (
            <div>
                <button onClick={() => incrementCount()}>Click {count} time{count === 0 ? '' : 's'}</button>
            </div>
        );
    }
}
 
export default ClickCount;