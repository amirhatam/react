import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      activeTab: "france",
      items: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onClick(value) {
    console.log("App#onClick value", value);
    this.setState({ activeTab: value });
  }

  onAdd(price, input) {
    console.log("App#onAdd", price, input);
    let items = this.state.items;
    items.push({ input, price });
    this.setState({
      items,
      activeTab: "list",
    });
  }


  componentDidMount() {
    // ["name","capital", "flag", "population", "region"].map((elem) => {
    //   fetch("https://restcountries.eu/rest/v2/name/france")
    //   .then(response=> response.json())
    //   .then(dataCountry => dataCountry[0].name)
    //   .then(name => console.log(name))
    // })
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((response) => response.json())
      .then((result) => {
        const flg = result.map((elem) => {
          return elem.flag;
        });
        this.setState({
          countryFlag: flg,
        });

        const countries = result.map((elem) => {
          return elem.name;
        });
        this.setState({
          countryName: countries,
        });

        const cpt = result.map((elem) => {
          return elem.capital;
        });
        this.setState({
          capitalCity: cpt,
        });
        
        const rgn = result.map((elem) => {
          return elem.region;
        });
        this.setState({
          regionName: rgn,
        });

        const ppl = result.map((elem) => {
          return elem.population;
        });
        this.setState({
          populationCT: ppl,
        });
      });
  }

  render() {
    const { activeTab, items } = this.state;
    return (
      <div>
        <Button
          isSelected={activeTab === "france"}
          onClick={(e) => this.onClick("france")}
        >
          France
        </Button>
        <Button
          isSelected={activeTab === "brazil"}
          onClick={(e) => this.onClick("brazil")}
        >
          List
        </Button>
        <Button
          isSelected={activeTab === "croatia"}
          onClick={(e) => this.onClick("croatia")}
        >
          Pay
        </Button>

        <img src="{this.state.countryFlag}"></img>
        <div>Flag: {this.state.countryFlag}</div>
        <div>Country: {this.state.countryName}</div>
        <div>Capital: {this.state.capitalCity}</div>
        <div>Capital: {this.state.regionName}</div>
        <div>Capital: {this.state.populationCT}</div>
      </div>
    );
  }
}

export default App;
