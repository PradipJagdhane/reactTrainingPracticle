import React, { PureComponent } from 'react';

class Counter extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increamentCounter = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render(){
        console.log("Counter component rendered");
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increamentCounter}>Increment</button>
            </div>
        )
    }
}

export default Counter;