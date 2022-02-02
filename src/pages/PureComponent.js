import React, { Component } from 'react';
import MemoComp from '../components/pure-component/MemoComp';
import PureComp from '../components/pure-component/PureComp';
import RegComp from '../components/pure-component/RegComp';

class PureComponent extends Component {
    state = {
        name: 'TEST Mounting'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'TEST'
            })
        }, 3000)
    }

    render() { 
        console.log('***** Parent component render *****')
        return (
            <div>
                <h2>PureComponent demo</h2>
                <p>Keep updating state every 3 secs</p>
                <p>Check console for the result</p>
                <p>If parent component is also PureComponent, then all the console wont't show while state updated</p>
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
                <MemoComp name={this.state.name} />
            </div>
        );
    }
}
 
export default PureComponent;