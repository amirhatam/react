import React from "react";
 
class Welcome extends React.Component {
	constructor() {
      super(); // permet de récupérer les props
    }

  render() {
    return (
			<div class="box col-sm-3 col-6">
				<i style = "fontSize:100; color:black">directions_walk</i>
			</div>
		)
  };
}

export default Welcome;