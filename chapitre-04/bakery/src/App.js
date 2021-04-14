import { Component, Fragment } from 'react'
import Button from "./components/Button.jsx"

class App extends Component {

    constructor() {
        super()

        this.state = {
          activeTab : "add ",
          items : [] 
        }

        this.updateUsername = this.updateUsername.bind(this)
    }

    updateUsername(event) {
        console.log("updateUsername target", event.target);
        console.log("updateUsername (si l'attribut existe dans le target. pas le cas pour un button par exemple)" ,event.target.type);
        console.log("updateUsername value", event.target.value);

        if (event.target.type === "text") {
            this.setState({
                username: event.target.value
            })
        } else if (event.target.id === "money") {
            this.setState({
                money: event.target.value
            })
        }

    }

   
    updateUsernameArrow = (value) => {
        console.log("value of input email is:", value);

    }

    render() {
        return (
            <>
              

               
              <h1>Bakery</h1>
                <div>
                    {/* <input id="money" type="range" value={this.state.money} onChange={this.updateUsername}></input> */}
                  
                    <Button/>
                    <Button/>
                    <Button/>
                  

                </div>
                    <input id="money" type="text" value={this.state.money} onChange={this.updateUsername}></input>

                <p>My username is: {this.state.username}</p>
                <p>My amount of money is: {this.state.money}</p>
            </>
            // </Fragment>
        )
    }
}

export default App