import React, { Component } from 'react';
import funcCounter from './funcCounter';

class HoverCount extends Component {
    render() { 
        const { name, count, incrementCount } = this.props
        return (
            <div onMouseOver={() => incrementCount()}>
                <p>{name} Hover {count} time{count === 0 ? '' : 's'}</p>
            </div>
        );
    }
}
 
export default funcCounter(HoverCount);