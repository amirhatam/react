import React from "react";
import Box from "./components/Box"
import './styles/global.css';
import './styles/bootstrap.css';


/* 
constructor(props) {
  super(props);

  this.state. = {
      value: "red";
  };

  this.changeColor = this.changeColor.bind(this);
}
 */

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">


          <Box icon = "local_drink" color= "blue" value = {0} unit = "L" />

          <Box icon = "directions_walk" color="black" value = {3000} unit = "steps"/>

          <Box icon = "favorite" color="red" value = {120} unit = "bpm"/>

          <Box icon = "wb_sunny" color="yellow" value = {-10} unit = "°c"/>

          <p>Heart :  {heartMin}</p>
          <p>Temperature :  {tempMin}</p>
          <p>steps :  {stepsMin}</p>
        </div>
      </div >
    );
  }
}

export default App;

