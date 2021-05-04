import React from "react";
import Fade from "react-reveal/Fade";

class Card extends React.Component {
  render() {

    const picsArray = this.props.imagecoll;

    // const imageFound = pics.map((e) => e.urls.regular)

   

    // var adults = picsArray.filter(function(e) {
    //   return (e.results) 
    // });

  
// console.log(" this.props.imagecoll :" , this.props.imagecoll[0]);

    return (
      <div
        className="bgCard"
        style={{
          background: `url(${this.props.cntImages})`,
          height: `${1800}px`,
        }}
      >
        {/* {console.log("this.props.name card: ",this.props.country)} */}
        {/* {console.log("Card this.props.imagecoll : ",this.props.imagecoll)} */}

        <Fade duration={30000}>
          <div className="row thead-light m-0">
            <p className="col-2 cardP">
              <img className="flag" alt=" " src={this.props.flagImg}></img>
              {this.props.country}
            </p>
            <p className=" col-2 cardP"> {this.props.capitalName}</p>
            <p className=" col-2 cardP"> {this.props.regionName}</p>
            <p className=" col-2 cardP"> {this.props.countryPopulation}</p>
            <p className=" col-2 cardP"> {this.props.countryLang}</p>
            <p className=" col-2 cardP"> {this.props.countryCurren}</p>
          </div>
        </Fade>
        {/* <img className="bgImage py-1 border border-5" src={this.props.cntImages} alt="new" /> */}

        {/* {picsArray.map((e) => (
          <img key="{pic}"  src={e.urls.regular}>{"pic"}</img>
       ))} */}
       <div>
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[0]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[1]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[2]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[3]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[4]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[5]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[6]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[7]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[8]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[9]} alt="new" />
        <img className="bgImage py-1 border border-5" src={this.props.imagecoll[10]} alt="new" />
         
       </div>
     
      </div>
    );
  }
}

export default Card;
