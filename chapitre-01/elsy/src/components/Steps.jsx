import React from "react";

class Steps extends React.Component {
    constructor() {
        super(); // permet de récupérer les props
    }

    render() {
        return (
            <div class="box col-sm-3 col-6">
                <span style="fontSize:100; color:black" class="material-icons">directions_walk</span>
            </div>
        )
    };
}

export default Steps;