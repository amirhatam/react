import React, { Component } from "react";
import Card from "../components/Card";
import Slider from "react-slick";

const moment = require("moment");

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  cssEase: "linear",
};
export default class Home extends Component {
  state = {
    movies: [],
  };

  formatDateToday(dateString) {
    // console.log("test 1 :",moment(dateString).format("DD/MM/YYYY"));

    const today = moment(dateString).format("YYYY-MM-DD");
    return today;
  }
  formatDateNextMonth(dateString) {
    // console.log("test 2:",moment(dateString).subtract(7, 'days').format("DD/MM/YYYY"));

    const lastWeek = moment(dateString).add(30, "days").format("YYYY-MM-DD");
    return lastWeek;
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" +
        this.formatDateToday() +
        "&primary_release_date.lte=" +
        this.formatDateNextMonth() +
        "&api_key=e441f8a3a151d588a4932d2c5d310769"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("data movies in componentDidMount", data.results);

        const testMap = data.results.map((elem) => {
          return elem;
        });
        // console.log("Home data movies in componentDidMount", testMap);

        this.setState({
          movies: testMap,
        });
      });
  }

  render() {
    return (
      <div
        
        className="container text-center"
      >
        <h1 className="font-weight-light mb-0 mt-4">New Upcoming Movies</h1>
        <Slider style={{ overflow: "hidden", maxHeight: "650px" }} {...settings}>
          <div className=" d-flex">
            {this.state.movies.map((elem, index) => {
              return <Card key={index} release_date={elem.release_date} poster_path={elem.poster_path} />;
            })}
          </div>
          <div></div>
          <div></div>
        </Slider>
        <div className=" m-5 ">
            {this.state.movies.map((elem, index) => {
              return <Card key={index} {...elem} />;
            })}
          </div>

      </div>
    );
  }
}
