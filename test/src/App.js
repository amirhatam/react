import React from "react";
import Welcome from "./components/Welcome";

const food= "Pizza";

class App extends React.Component {
    
    constructor() {
        super();
  
        this.state = {  // Ne pas oublier "this" !
          name: "Mike",
          page: "Home"
        };
      }
  
      render() {
        return (
          <div>
              <Welcome name={this.state.name} page={this.state.page} />
              {/* ici, envoie les données du state en props */}
          </div>
      )
      }
    }

export default App ;