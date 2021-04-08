import { Slider } from "@material-ui/core";
import React from "react"
import Demo from '../demo.js';




class Box extends React.Component {

    render() {

        return (

            <div className="box col-sm-3 col-6" style={{ textAlign: "center" }} >
                <span class="material-icons" style={{ fontSize: "100px", color: this.props.color }}> {this.props.icon} </span>
                <p> {this.props.value} {this.props.unit} </p>
                <Demo />
                

            </div>


        )



    }



}

export default Box;