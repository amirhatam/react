import { Component } from "react";
import Button from "./components/Button.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add ",
      items: [],
    };
  }

  render() {
    return (
      <div
        className="text-center"
        style={{ display: "grid", width: "100%" }}
      >
        <h1 className="mt-4 mb-3">Bakery</h1>
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => this.handleClick("add")}
            name="Add"
          />
          <Button
            onClick={() => this.handleClick("list")}
            name="List"
          />
          <Button
            onClick={() => this.handleClick("pay")}
            name="Pay"
          />
        </div>
      </div>
    );
  }
}

export default App;
