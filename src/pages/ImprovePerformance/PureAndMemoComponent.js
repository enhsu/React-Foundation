import React, { Component } from 'react';
import MemoComp from '../../components/improve-performance/pure-and-memo-component/MemoComp';
import PureComp from '../../components/improve-performance/pure-and-memo-component/PureComp';
import RegComp from '../../components/improve-performance/pure-and-memo-component/RegComp';

class PureAndMemoComponent extends Component {
    state = {
        name: 'TEST Mounting'
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                name: 'TEST'
            })
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() { 
        console.log('***** Parent component render *****')
        return (
            <div>
                <h2>Pure And Memo Component</h2>
                <p>Keep updating state every 3 secs</p>
                <p>Check console for the result</p>
                <p>If parent component is also Pure Component, then all the console wont't show while state updated</p>
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
                <MemoComp name={this.state.name} />
            </div>
        );
    }
}
 
export default PureAndMemoComponent;