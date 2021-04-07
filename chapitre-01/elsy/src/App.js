import React from "react";
import './App.css';

const tempMin = -20; 
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000; 

class App extends React.Component {
  render() {
    return (
      <div class= "container-fluid">
        <div class = "row">
          {stepsMin}{stepsMax}
          <p> {heartMin}{tempMin}{stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;