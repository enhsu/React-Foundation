import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        const args = {
            count: this.state.count,
            incrementCount: this.incrementCount,
            sayHi: () => console.log('hi')
        }
        return (
            <div>
                {
                    this.props.children(args)
                }
            </div>
        );
    }
}
 
export default Counter;