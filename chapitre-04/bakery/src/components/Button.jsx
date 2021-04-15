import React from "react";
import Add from "./Add"


 
class Button extends React.Component {
	
    isSelected  = () => {
        // console.log(this);
    }

    onClick  = () => {
        // console.log(this);
    }


    children = () => {
        // console.log(this);
    }



  render() {
    return (
			<div >
                <div >
				  <button class="btn btn-outline-primary" onClick={this.updateUsername}>Add</button>
				  <button class="btn btn-outline-primary" onClick={this.updateUsername}>List</button>
				  <button class="btn btn-outline-primary" onClick={this.updateUsername}>Pay</button>
               
               </div>
			</div>
		)
  };
}

export default Button;