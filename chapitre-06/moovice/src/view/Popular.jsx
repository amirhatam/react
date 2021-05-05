import React, { Component } from "react";

export default class Popular extends Component {
  state = {
    movies: [],
    image: "",
    title: "",
    release: "",
    overview: "",
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("data movies in componentDidMount", data);

        let source = data.results[0];

        // console.log("Popular movie data result", data.results);
       

        this.setState({
          image: source.poster_path,
          title: source.title,
          release: source.release_date,
          overview: source.overview,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Popular</h1>
      </div>
    );
  }
}
