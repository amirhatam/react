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
            name="add"
            stylesheetClass={["btn-primary", "w-100"]}
          />
          <Button
            onClick={() => this.handleClick("list")}
            name="list"
            stylesheetClass={["btn-primary", "w-100", "mx-1"]}
          />
          <Button
            onClick={() => this.handleClick("pay")}
            name="pay"
            stylesheetClass={["btn-primary", "w-100"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
