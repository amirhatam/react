import React from "react";

class Box extends React.Component {
 
    constructor(){
        super()
        this.state = {
          textValue: ''
        }
      } 

      handleInput(e){ 
        this.setState({ textValue: e.target.value })
      }

      

    render() {

        // console.log(this.props.heartVal);
        // console.log(this.props.value);
        console.log(this.onHeartChange);
   
        const handleBar = () => {

            if (this.props.unit === "L") {
                //  return <p> {this.props.count } </p> 
                

                
            }
            if (this.props.unit === "steps") {
                return    <input type="range" id="myInput" min="0" max="50000" value={this.state.textValue} onInput={this.handleInput.bind(this)}/>
                
            }
            if (this.props.unit === "bpm") {
                return    <input type="range" id="volume" min="80" max="180" value={this.state.textValue} onInput={this.handleInput.bind(this)} />

            }
            if (this.props.unit === "°c") {
                return    <input type="range" id="volume" min="-20" max="40" value={this.state.textValue} onInput={this.handleInput.bind(this)} />
               
            }

        }
    
        return (
            <div className="box col-sm-3 col-6 txtcnt" style={{textAlign:"center"}}>

                
                <span className="material-icons   fsize " style={{fontSize:"100px", color : this.props.color }} >  {this.props.icon}  </span>
                
               
                <p > {this.props.count} { this.state.textValue } {this.props.unit}   </p>
                <div>{handleBar()}</div>
                
               
              
               
            </div>

        )


    };
}

export default Box;