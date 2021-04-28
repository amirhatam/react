import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button
        onClick={() => this.props.onClick()}
        className="btn btn-primary"
      >
        
      </button>
        )
    }
}

export default Button
