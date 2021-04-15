import React from "react";

class Add extends React.Component {
  

  render() {
    return (
      <div>
        <input
          id="money"
          type="text"
          value={this.state.money}
          onChange={this.updateUsername}
        ></input>
      </div>
    );
  }
}

export default Add;
