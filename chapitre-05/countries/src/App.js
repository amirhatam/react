import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import "./assets/styles/styles.css"
import Card from "./components/Card";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
  
        name: "",
        capital: "",
        flag: "",
        population: "",
        region: ""
  
      }
      this.userInput=this.userInput.bind(this)
    //   console.log("contructor");
    }
    componentDidMount() {
      fetch("https://restcountries.eu/rest/v2/name/france")
        .then(response => response.json())
        .then(result => {
  
          // console.log("result", result);
          const countrieName = result[0].name;
          const countrieCap = result[0].capital;
          const countrieFlag = result[0].flag;
          const countriePopul = result[0].population;
          const countrieRegion = result[0].region;
          // console.log("result name", countrieName);
  
          this.setState({
            name: countrieName,
            capital: countrieCap,
            flag: countrieFlag,
            population: countriePopul,
            region: countrieRegion
          })
  
        })
  
    }
  getCountry(country){
    fetch("https://restcountries.eu/rest/v2/name/" + country)
        .then(response => response.json())
        .then(result => {
         
  
          this.setState({
            name:result[0].name,
            capital: result[0].capital,
            flag: result[0].flag,
            population: result[0].population,
            region: result[0].region
          })
  
          console.log(countrieName);
  
        })

  }




    // getCountry(country) {
    //   fetch("https://restcountries.eu/rest/v2/name/" + country)
    //     .then(response => response.json())
    //     .then(result => {
    //       const countrieName = result[0].name;
    //       const countrieCap = result[0].capital;
    //       const countrieFlag = result[0].flag;
    //       const countriePopul = result[0].population;
    //       const countrieRegion = result[0].region;
          
  
    //       this.setState({
    //         name: countrieName,
    //         capital: countrieCap,
    //         flag: countrieFlag,
    //         population: countriePopul,
    //         region: countrieRegion
    //       })
  
    //       console.log(countrieName);
  
    //     })
    // }
  
userInput (event) {
    console.log("event.target.value",event.target.value);
    this.setState({
        name:event.target.value
    })
    
}
  
    render() {
      console.log("render");
      return (
        <div className="text-center ">
              <h1>Country Selector</h1>
              <input 
              onChange={this.userInput}
              type="text" 
              className="form-control my-3 inputS" 
              placeholder="Country" 
              ></input>
          <div className="d-inline-flex">
          {/* <Button clickButton={()=>this.getCountry("france")} children="France"></Button>
          <Button clickButton={()=>this.getCountry("brazil")} children="Brazil"></Button>
          <Button clickButton={()=>this.getCountry("croatia")}children="Croatia"></Button> */}
          <Button 
          onClick={()=> this.getCountry()}
          clickButton={()=>this.getCountry("search")}children="Search"></Button>

          </div>
          <div className="">

          {/* <img src={this.state.flagImg}></img> */}
           
          </div>
            <Card
            flagImg={this.state.flag}
            country={this.state.name}
            capitalName={this.state.capital}
            regionName={this.state.region}
            countryPopulation={this.state.population}
            ></Card>
  
        </div>
      )
  
    }
  }
  
  
  
  export default App;
  