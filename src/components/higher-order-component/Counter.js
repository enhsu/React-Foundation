import React, { Component } from 'react';

const Counter = (ChildComponent, incrementNumber = 1) => {
    class LogicComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() { 
            return (
                <ChildComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                />
            );
        }
    }
    return LogicComponent;
}
 
export default Counter;