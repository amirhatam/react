import React from "react";
import Counter from "./components/Counter"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
     count: 0 ,
     count2: 0
     
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
          count: this.state.count + 1 ,
          count2: this.state.count2 + 1
    
        });

      }


  };
   decrementCount2 = () => {
     
    if(this.state.count2 > 0){
    
    this.setState({
      count2: this.state.count2 - 1,
      count: this.state.count - 1

    });
  }

  };

  incrementCount2 = () => {
   
      if(this.state.count < 100){

        this.setState({
          count2: this.state.count2 + 1
    
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

      count2= {this.state.count2}
      addFunction2 = {this.incrementCount2}
      removeFunction2 = {this.decrementCount2}

      />
     
      
      </div>
    );
  }
}

export default App;