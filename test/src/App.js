import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userConnected: true,
      userName: "Ali",
    };
  }

  funNavigation() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    );
  }

  aliContent(){
    if (this.state.userConnected) {
      return (
        <section>
          <h1>Konexio</h1>
          <h2>Learning React</h2>
        </section>
      )
    } else {
      return (
        <section>
          <p>Vous devez vous connecter pour voir ce contenu</p>
        </section>
      )


    }
  }

  renderUserName() {
    return (
      <h2>renderUserName. User Name: {this.state.userName}</h2>
    )



  }

  render() {
    let userName

    return (

      <div>
        {this.funNavigation()}
        {this.aliContent()}
      </div>
    )

  }

}

export default App;
