import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";



 class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/about"></Link></li>
              <li><Link to="/contact"></Link></li>
            </ul>
          </nav>

          <Switch> 
            <Route exact path="/" component={}/> 
						<Route path="/about" component={}/>
            <Route path="/contact" component={}/>
						<Route path="*" component={}/>
          </Switch>
      </div>
    )
  }
}
export default App;