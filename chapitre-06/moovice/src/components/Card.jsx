import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class Card extends Component {
  state = {
    image:
      "http://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png",
    title: "",
    release: "",
    overview: "",
  };

  render() {
    // console.log("Card movies : ", this.props.poster_path);

    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
        />

        <h2> {this.props.title}</h2>
        <h3> {this.props.release_date}</h3>
        <p> {this.props.overview}</p>
      </div>
    );
  }
}
