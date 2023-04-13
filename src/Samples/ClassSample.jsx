import React from "react";

class ClassSample extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <h1>{count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </React.Fragment>
    );
  }
}

export default ClassSample;
