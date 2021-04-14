import { Component, Fragment } from 'react'

class App extends Component {

    constructor() {
        super()

        this.state = {
            username: "",
            money: 35
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

    // C'est pas le plus performant avec => fonctions mais voici une autre option
    // updateUsernameArrow = (e) => {
    //     // console.log("updateUsernameArrow", e.target );

    //     console.log("value of input email is:", e.target.value);
    // }

    // C'est pas le plus performant avec => fonctions mais voici une autre option
    updateUsernameArrow = (value) => {
        console.log("value of input email is:", value);

        // on pourrait faire quelque chose avec, par exemple mettre à jour un state (le state email n'existe pas encore, donc il faudrait le créer dans ce cas)
    }

    render() {
        return (
            // <Fragment> // <> est un raccourci de Fragment, qu'on pourrais utiliser aussi comme React.Frament, si on avais importé React sans destructuration dans la première ligne
            <>
                <h1>Test Events:</h1>

                <div>
                    <label>Email</label>

                    {/* <input type="email" onInput={this.updateUsernameArrow}></input> */} 

                    {/* C'est pas le plus performant avec => fonctions mais voici une autre option */}
                    <input type="email" onInput={(e) => this.updateUsernameArrow(e.target.value)}></input>
                </div>

                <div>
                    <label>Username</label>
                    <input id="username" type="text" onChange={this.updateUsername}></input>
                </div>

                <div>
                    <input id="money" type="range" value={this.state.money} onChange={this.updateUsername}></input>

                    <button onClick={this.updateUsername}>Click me!</button>
                </div>

                <p>My username is: {this.state.username}</p>
                <p>My amount of money is: {this.state.money}</p>
            </>
            // </Fragment>
        )
    }
}

export default App