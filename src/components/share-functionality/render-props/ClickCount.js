import React, { Component } from 'react';

class ClickCount extends Component {
    render() { 
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={() => incrementCount()}>Click {count} time{count === 0 ? '' : 's'}</button>
            </div>
        );
    }
}
 
export default ClickCount;