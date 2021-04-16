import { Component } from "react";
import Button from "./components/Button.jsx";
import Add from "./components/Add.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      productName : "",
      price: 1,
      activeTab: "add ",
      items: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleClick(this_comp) {
    this.setState({
      activeTab: this_comp,
    });
  }
  handleForm(this_form) {
    this.setState({
        productName : this_form,
    });
  }
  handleSlider(this_form) {
    this.setState({
      price: this_form,
    });
  }

  render() {
    return (
      <div className="text-center" style={{ display: "grid", width: "100%" }}>
        <h1 className="mt-4 mb-3">Bakery</h1>
        <div className="d-flex justify-content-center">
          <Button onClick={() => this.handleClick("add")} name="Add" />
          <Button onClick={() => this.handleClick("list")} name="List" />
          <Button onClick={() => this.handleClick("pay")} name="Pay" />
        </div>
        {this.state.activeTab === "add" ? (
          <Add 
            name="add"
            productName ={(e) => this.handleForm(e.target.value)}
            inputSlider={this.handleSlider}
            slider={this.state.price}
            onClick={() => this.handleSubmit()}
          />
        ) : null}
       
      </div>
    );
  }
}

export default App;
