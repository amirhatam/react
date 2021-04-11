import React from "react";
import Counter from "./components/Counter"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
     count: 0
    }
    
  }

   decrementCount = () => {
     
    if(this.state.count > 0){
    
    this.setState({
      count: this.state.count - 1

    });
  }

  };

  incrementCount = () => {
   
      if(this.state.count < 100){

        this.setState({
          count: this.state.count + 1
    
        });

      }


  };
  
  render() {
    return (
      <div>
       <h1 style={{textAlign:"center"}} className="mb-3 display-4 lead">Counter</h1>
     
      <Counter count= {this.state.count}
      addFunction = {this.incrementCount}
      removeFunction = {this.decrementCount}
      />
      <Counter count= {this.state.count}
      addFunction = {this.incrementCount}
      removeFunction = {this.decrementCount}
      />
      
      </div>
    );
  }
}

export default App;