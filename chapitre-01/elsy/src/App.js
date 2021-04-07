import React from "react";
// import'./components/Steps.jsx';
import './styles/global.css';
// import Steps from "./components/Steps"


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

          
         stepmin : {stepsMin} <br/>
         stepmax : {stepsMax}

          <p>Heart :  {heartMin}</p>
          <p>Temperature :  {tempMin}</p>
          <p>steps :  {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;

