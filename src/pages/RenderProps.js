import React, { Component } from 'react';
import Counter from '../components/render-props/Counter';
import ClickCount from '../components/render-props/ClickCount';

class RenderProps extends Component {
    render() { 
        return (
            <div>
                <Counter>
                    {(args) => (
                        <ClickCount {...args}/>
                    )}
                </Counter>
            </div>
        );
    }
}
 
export default RenderProps;