import React, { Component } from 'react';
import Counter from '../../components/share-functionality/render-props/Counter';
import ClickCount from '../../components/share-functionality/render-props/ClickCount';

class RenderProps extends Component {
    render() { 
        return (
            <div>
                <h2>Render Props</h2>
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