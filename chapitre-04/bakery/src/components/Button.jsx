import React from "react";
 
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
				  <button class="btn btn-outline-primary" onClick={this.updateUsername}>Click me!</button>
               
			</div>
		)
  };
}

export default Button;