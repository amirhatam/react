import React, { Component } from 'react'
import Popular from "../view/Popular"

export default class Card extends Component {
    render() {
        console.log(this.props.title);
        return (
            <div>
                <Popular/>
                
            </div>
        )
    }
}
