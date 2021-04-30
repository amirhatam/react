import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div
        className="bgCard"
        style={{
          background: `url(${this.props.countryImage})`,
          height: `${window.innerHeight}px`,
        }}
      >
        <div>
          <img className="py-3 " src={this.props.flagImg}></img>
          {/* {console.log("this.props.name card: ",this.props.country)} */}
          <div className="cntD">
            Country: {this.props.country}
            <span className="mx-3">Capital: {this.props.capitalName}</span>
            <span className="mx-3">Region: {this.props.regionName}</span>
            <span className="mx-3">
              Population: {this.props.countryPopulation}
            </span>
          </div>
        </div>

        {/* <img className="py-3" src={this.props.countryImage}></img> */}
      </div>
    );
  }
}

export default Card;
