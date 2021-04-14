import React from "react";
import Box from "./components/Box"
import './styles/global.css';
import './styles/bootstrap.css';




const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {


  constructor() {
    super()
  
    this.state = {
     count: 1.5 ,
      heart: 120,
      temperature:
      
    }
   
  } 

  onHeartChange = (value) => {
     
    if(this.state.heart + 1){
    
    this.setState({
      heart: this.state.heart 

    });
  // }
  };
  
  
 

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          
          <Box icon = "local_drink" color= "blue" value = {0} unit = "L"
           count= {this.state.count}
           heartFunction = {this.value}
          
           />

          <Box icon = "directions_walk" color="black" value = {3000} unit = "steps"/>
          
          <Box icon = "favorite" color="red" value = {120} unit = "bpm" 
          min= {heartMin} max={heartMax}
          onChange = {this.onHeartChange} />

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

