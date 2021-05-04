import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import "./assets/styles/styles.css";
import Card from "./components/Card";
import BG from "./assets/img/1.jpg";

const clientId = "KUzY-BCgRUgnhx7Y-TI9EXsr3Oq6HStenfHd9zNZIGk";

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
      currencies: "",
      languages: "",
      imagesC: "",
      imagesCollect:""
    };
    this.userInput = this.userInput.bind(this);
   
  }
  componentDidMount() {
    fetch("http://localhost:8000/countries/name/")
      .then((response) => response.json())
      .then((result) => {
        
        let data = result.resultCountries[0];

        const countrieName = data.name;
        const countrieCap = data.capital;
        const countrieFlag = data.flag;
        const countriePopul = data.population;
        const countrieRegion = data.region;
        const countrieImage = data.img;
        const countrieCurren = data.currencies[0].name;
        const countrielang = data.languages[0].name;
       

        this.setState({
          name: countrieName,
          capital: countrieCap,
          flag: countrieFlag,
          population: countriePopul,
          region: countrieRegion,
          image: countrieImage,
          currencies: countrieCurren,
          languages: countrielang,
        });
      });
  }
  getCountry(country) {
    fetch("http://localhost:8000/countries/name/" + this.state.name)
      .then((response) => response.json())
      .then((result) => {
       
        let data = result.resultCountries[0];
        this.setState({
          name: data.name,
          capital: data.capital,
          flag: data.flag,
          population: data.population,
          region: data.region,
          image: data.img,
          currencies: data.currencies[0].name,
          languages: data.languages[0].name,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      "http://api.unsplash.com/search/photos?page=1&query=" + this.state.name +"&client_id=" + clientId
    )
      .then((response) => response.json())
      .then((data) => {
   
        const testMap= data.results.map((elem)=> {
          return elem.urls.regular
        })
        // const testMap= data;

     
        this.setState({
          // imageCnt: data.results[1].urls.full,
          imagesCollect: testMap

        });
        
      })
      .catch((err) => console.log(err));
  }

  userInput(event) {
    console.log("event.target.value", event.target.value);

    this.setState({
      name: event.target.value,
    });
  }
  render() {
  //  console.log("App imagesCollect : " ,this.state.imagesCollect);
  
   const {
    flag,
    name,
    capital,
    region,
    population,
    image,
    currencies,
    languages,
    imageCnt,
    imagesCollect
   } = this.state
    return (
      <div
        className="text-center bgC "
        style={{ background: `url(${BG})`, height: `${1800}px` }}
      >
        <div className="input-group pt-3 headerContainer">
          <div className="input-group-prepend">
            <Button
              onClick={() => this.getCountry()}
              clickButton={() => this.getCountry("search")}
              // children=""
            >
              <i className="fas fa-search"></i>
            </Button>
          </div>
          <input
            onChange={this.userInput}
            type="text"
            className="form-control inputS"
            placeholder="Search Country"
          ></input>
        </div>

        <div className="row m-0">
          <p className="col-2 mt-2">Country</p>
          <p className="col-2 mt-2">Capital</p>
          <p className="col-2 mt-2">Region</p>
          <p className="col-2 mt-2">Population</p>
          <p className="col-2 mt-2">Languages</p>
          <p className="col-2 mt-2">Currencies</p>
        </div>

        <Card
          flagImg={flag}
          country={name}
          capitalName={capital}
          regionName={region}
          countryPopulation={population}
          countryImage={image}
          countryCurren={currencies}
          countryLang={languages}
          cntImages={imageCnt}
          imagecoll={imagesCollect}
        ></Card>
      </div>
    );
  }
}

export default App;
