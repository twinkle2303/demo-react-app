import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    this.state = {
      name: "",
      count: 0,
    };
  }

  //Initial & re-render
  componentWillReceiveProps() {
    //this.props.age > 20;
    let bool = this.props.age === null;
  }

  //Initial
  componentDidMount() {
    //You will have to peform side effects = API calls, in this method only
  }

  //re-render
  shouldComponentUpdate() {
    return this.props.age === 20;
  }

  //re-render
  componentDidUpdate() {}

  //Initial & re-render
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default ClassBased;
