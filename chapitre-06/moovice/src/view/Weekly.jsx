import React, { Component } from "react";
import Card from "../components/Card";

const moment = require("moment");

export default class Weekly extends Component {
  state = {
    movies: [],
  };

  formatDateToday(dateString) {
    // console.log("test 1 :",moment(dateString).format("DD/MM/YYYY"));

    const today = moment(dateString).format("YYYY-MM-DD");
    return today;
  }
  formatDateLastWeek(dateString) {
    // console.log("test 2:",moment(dateString).subtract(7, 'days').format("DD/MM/YYYY"));

    const lastWeek = moment(dateString)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    return lastWeek;
  }

  componentDidMount() {
    // const url = "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" +
    // this.formatDateLastWeek() +
    // "&primary_release_date.lte=" +
    // this.formatDateToday() +
    // "&api_key=e441f8a3a151d588a4932d2c5d310769";

    const url = "http://localhost:8000/movies/weekly";
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("weekly data movies  ", data.dataMoviesWeekly.results);

        this.setState({
          movies: data.dataMoviesWeekly.results,
          // movies: data.results,
        });
      });
  }

  render() {
    // console.log("render today:",this.formatDateToday());
    // console.log("render last week:",this.formatDateLastWeek());
    return (
      <div>
        <h1 className="text-center mt-4 font-weight-light ">Weekly Movies</h1>
          <div className=" m-5">
            {this.state.movies.map((elem, index) => {
              return <Card key={index} {...elem} />;
            })}
          </div>
      
      </div>
    );
  }
}
