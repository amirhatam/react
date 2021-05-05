import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Card from "./components/Card"

class App extends React.Component {
  


  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link /* onClick={this.userClick} */ to="/movie/1">
                  A Wrinkle in Time
                </Link>
              </li>
              <li>
                <Link /* onClick={this.userClick} */ to="/movie/2">
                  The Strangers: Prey at Nigh
                </Link>
              </li>
              <li>
                <Link /* onClick={this.userClick} */ to="/movie/3">
                  The Hurricane Heist
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              exact
              path="/movie/1"
              render={() => <Card  />}
            ></Route>

            <Route
              path="/movie/2"
              //   render={}
            ></Route>

            <Route
              path="/movie/3"
              //   render={}
            ></Route>

            {/* <Route path="*" component={PageNotFound}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
