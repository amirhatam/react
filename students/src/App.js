import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: [],
  };
  componentDidMount() {
    fetch("http://localhost:9000/students")
      .then((response) => response.json())
      .then((data) => {
        // console.log("data students", data);

        this.setState({
          name: data,
        });
      });
  }

  render() {
    console.log(this.state.name)
    return (
      <div>
        {this.state.name.map((elem, index) => {
          return <h1 key={index}>{elem.name}</h1>;
        })}
      </div>
    );
  }
}
