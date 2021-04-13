import React from "react";
import Slider from "rc-slider";
import slide_one from "../pics/pers.gif"
import 'rc-slider/assets/index.css';


class Person extends React.Component{
 render() {
     return (
         <div className="box col-sm-3 col-6 " style={{textAlign:"center"}}>
         <div className="carrousel_image" style={{background: `url(${slide_one})`, height:`${window.innerHeight}px` }} />
         <p>{this.props.val} <span>Steps</span> </p>
            <Slider Value={this.props.steps} min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeP(val)} />  
         </div>
     );
 }
};

export default Person;