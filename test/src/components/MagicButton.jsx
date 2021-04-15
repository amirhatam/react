import React from "react";

class MagicButton extends React.Component {
  // aucune logique dans ce composant, il reste bien "dumb" !

  render() {
    return (
      <button onClick={this.props.onClick}>
     
        Click me !!
      </button>
    );
  }
}

export default MagicButton;
