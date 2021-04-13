import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Temperature from './components/Temperature';
import './styles/global.css';
import './styles/bootstrap.css';


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      heart: 120,
      steps: 3000,
      temperature: -10,
      water: 1.5
    };
  }

  
  
  onHeartChange = (value) => {
    this.setState({heart: value});
  }

  onPersonChange = (value) => {
    this.setState({steps: value});
  }

  onChangeTemperature = (value) => {
    this.setState({temperature: value});
  }



calculWater = (heart, temperature, steps) => {
  let tempwater = this.state.water;

    if(this.state.temperature > 20) {
      let diffTemp = (this.state.temperature - 20) * 0.02;
    tempwater = tempwater + diffTemp;
      }
    if(this.state.heart > 120) {
      let diffHeart = (this.state.heart - 120) * 0.0008;
      tempwater = tempwater + diffHeart;
      } 
    if(this.state.steps > 10000) {
      let diffSteps = (this.state.steps - 10000) * 0.00002;
      tempwater = tempwater + diffSteps;
    }
  
    return tempwater.toFixed(2);
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <Water drink={this.calculWater(this.state.temperature,this.state.heart,this.state.steps)}/>
            <Person min={stepsMin} max={stepsMax} val={this.state.steps} onChangeP={this.onPersonChange} /> 
            <HeartRate min={heartMin} max={heartMax} val={this.state.heart} onChangeHr={this.onHeartChange} />
            <Temperature min={tempMin} max={tempMax} val={this.state.temperature} onChangeT={this.onChangeTemperature} />
          </div>  
         {/*  <p>Heart :  {heartMin}</p>
          <p>Temperature :  {tempMin}</p>
          <p>steps :  {stepsMin}</p> */}
          </div>
    );
  }
}

export default App;