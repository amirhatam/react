import React from "react";
import slide_one from "../pics/sun.gif"
import Slider from "rc-slider";



class Temperature extends React.Component{
    render() {
        return (
            <div className="box col-sm-3 col-6 " style={{textAlign:"center"}}>
          <div className="carrousel_image" style={{background: `url(${slide_one})`, height:`${window.innerHeight}px` }} />

            <p>{this.props.val} <span>°C</span> </p>
                <Slider defaultValue={20} min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeT(val)} />
            </div>
        );
    }
};

export default Temperature;