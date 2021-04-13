import React from "react";
import slide_one from "../pics/water.gif"
class Water extends React.Component{
    render() {
        return (
            <div className="box col-sm-3 col-6 " style={{textAlign:"center"}}>
          <div className="carrousel_image" style={{background: `url(${slide_one})`, height:`${window.innerHeight}px` }} />

            <p>{this.props.drink} <span>L</span> </p>
            </div>
        );
    }
};

export default Water;