import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        {/* {console.log("this.props.name card: ",this.props.country)} */}
        <img src={this.props.flagImg}></img>
        <h4>Country: {this.props.country}</h4>
        <h5>Capital: {this.props.capitalName}</h5>
        <p>Region: {this.props.regionName}</p>
        <p>Population: {this.props.countryPopulation}</p>
      </div>
    );
  }
}

export default Card;
