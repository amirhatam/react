import React from "react";
import MagicButton from "./components/MagicButton.jsx";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      // ici : le state contient la donnée "color"
      color: "white",
      bgcolor: "lightblue",
       
    };
  }

  changeColor = () => {
  
    this.setState({
      color: "blue",
    });
    if (this.state.color === "blue"){
        this.setState({
            color: "green",
          });
        }
        if (this.state.color === "green") {
            this.setState({
                color: "red"
            })
        }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color, backgroundColor: this.state.bgcolor, height:this.props.size }}>Hello guys !</h1>
        <MagicButton onClick={() => this.changeColor()} />
      </div>
    );
  }
}

export default App;
