import React from "react";
import Slider from "rc-slider";
import slide_one from "../pics/heart.gif"
import 'rc-slider/assets/index.css';

class HeartRate extends React.Component{
    render() {
        return (
            <div className="box col-sm-3 col-6 " style={{textAlign:"center"}}>
            <div className="carrousel_image" style={{background: `url(${slide_one})`, height:`${window.innerHeight}px` }} />

            <p>{this.props.val} <span>BPM</span> </p>
            <Slider defaultValue={120} min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeHr(val)} />

            </div>
        );
    }
};

export default HeartRate;