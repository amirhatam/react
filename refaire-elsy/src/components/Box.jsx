import { Grid, Input, Slider } from "@material-ui/core";
import React from "react"
import Demo from '../demo.js';




class Box extends React.Component { 

    
      
    render() {

   /*      const handleBar = () => {


            
            if (this.props.unit === "L") {
        
                console.log(this.props.unit);
            }
            if (this.props.unit === "steps") {
                return    <Slider/>
               
            }
            if (this.props.unit === "bpm") {
                return    <Slider/>
               
            }
            else if  (this.props.unit === "°C") {
                return   <Slider/>
               
            }

        } */

        return (

            <div className="box col-sm-3 col-6" style={{ textAlign: "center" }} >
                <span class="material-icons" style={{ fontSize: "100px", color: this.props.color }}> {this.props.icon} </span>
                <p>  {this.props.value} {this.props.unit}  </p>
                <Demo/>
              {/*   {handleBar()} */}
                { }
               

            </div>


        )



    }



}

export default Box;