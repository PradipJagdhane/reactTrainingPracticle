import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    // Initial state
    this.state = {
      secondsElapsed: 0,
    };
    console.log('Constructor: Timer is being initialized');
  }

  // Mounting: componentDidMount is called once after the component is inserted into the DOM
  componentDidMount() {
    console.log('componentDidMount: Timer started');
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }

  // Updating: componentDidUpdate is called after the component's updates are flushed to the DOM
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Timer updated');
    console.log(`Previous seconds: ${prevState.secondsElapsed}, Current seconds: ${this.state.secondsElapsed}`);
  }

  // Unmounting: componentWillUnmount is called right before the component is removed from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Timer stopped');
    clearInterval(this.interval);
  }

  // Render method to define the UI
  render() {
    console.log('Render: Timer is rendering');
    console.log('props', this.props);
    return (
      <div>
        <h1>Timer: {this.state.secondsElapsed} seconds</h1>
      </div>
    );
  }
}

export default Timer;
