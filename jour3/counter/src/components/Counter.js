import React from 'react'
import "../styles/bootstrap.css"


class Counter extends React.Component {

    constructor() {
        super()
    }

    render () { 
    return (
        <div style={{textAlign:"center" }}>
            
             <button onClick={this.props.removeFunction} className="btn btn-outline-dark rounded-pill m-2 p-3">-</button>
             <h2 className="d-inline-flex mx-3 lead">{this.props.count}</h2>
             <button onClick={this.props.addFunction} className="btn btn-outline-dark rounded-pill m-2 p-3" >+</button>
            
        </div>
    )
}
}

export default Counter
