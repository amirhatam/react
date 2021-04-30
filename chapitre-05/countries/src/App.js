import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import "./assets/styles/styles.css";
import Card from "./components/Card";
import BG from "./assets/img/1.jpg"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      image: "",
    };
    this.userInput = this.userInput.bind(this);
    //   console.log("contructor");
  }
  componentDidMount() {
    fetch("http://localhost:8000/countries/name/")
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        const countrieName = result.resultCountries.name;
        const countrieCap = result.resultCountries.capital;
        const countrieFlag = result.resultCountries.flag;
        const countriePopul = result.resultCountries.population;
        const countrieRegion = result.resultCountries.region;
        const countrieImage = result.resultCountries.img;
        // console.log("result name", countrieName);

        this.setState({
          name: countrieName,
          capital: countrieCap,
          flag: countrieFlag,
          population: countriePopul,
          region: countrieRegion,
          image: countrieImage,
        });
      });
  }
  getCountry(country) {
    fetch("http://localhost:8000/countries/name/" + this.state.name)
      .then((response) => response.json())
      .then((result) => {
        console.log("result dans getCountry:", result);
        // console.log("result dans name:", this.state.name);
      //   console.log("result dans capital:", this.state.capital);
      //  console.log("result name :", result.resultCountries.name);
          this.setState({
            name: result.resultCountries.name,
            capital: result.resultCountries.capital,
            flag: result.resultCountries.flag,
            population: result.resultCountries.population,
            region: result.resultCountries.region,
            image: result.resultCountries.img,
          });
        

      })
      .catch((err) => console.log(err));
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

  userInput(event) {
    console.log("event.target.value", event.target.value);
   
    this.setState({
      name: event.target.value,
      
    });
  }
  render() {
    // console.log("render");
    return (
      <div className="text-center bgC " style={{background: `url(${BG})`, height:`${800}px` }}>
        
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
            onClick={() => this.getCountry()}
            clickButton={() => this.getCountry("search")}
            children="Search"
          ></Button>
        </div>
        <div className=""></div>
        <Card
          flagImg={this.state.flag}
          country={this.state.name}
          capitalName={this.state.capital}
          regionName={this.state.region}
          countryPopulation={this.state.population}
          countryImage={this.state.image}
        ></Card>
      </div>
    );
  }
}

export default App;
