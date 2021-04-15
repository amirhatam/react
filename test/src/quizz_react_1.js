// 1ere partie

// 1. Quel est la différence entre une props et un state? Vous pouvez utiliser du code pour l'expliquer, en plus du texte
La différence entre state et props, 
c’est que les props sont passées depuis le composant parent, 
alors que state est géré en interne par le composant lui-même. 
Un composant ne peut pas changer ses props, mais il peut changer son state.

// 2. Est-ce que n'importe quel composant peut créer son propre state ?
oui

// 3. Décrivez les étapes pour faire une remontée de donnée entre un composant enfant et son parent. Pas besoin de répondre avec du code


// 2ème partie

// Rajoutez le code correspondant pour répondre au instructions marqués en commentaires

import React from 'react';

class Quizz extends React.Component {

    constructor() {
        super();
        
        this.state = {
            list: [1, 2, 3, 4],
            foo: false
        }
        
        this.click = this.click.bind(this);
    }

    click() {
        console.log('Je suis clické');

        // Il faut que je rajoute un element number au choix à ma list à chaque click
        // Bonus: le number doit être random/different pour chaque click
    }

    render() {
        return (
            <div>
                {/* afficher dans des balises ul / li tout 
                les element de la list en utilisant la fonction map}*/}
                <ul>
                    <li>
                        <a href="/1">1</a>
                    </li>
                    <li>
                        <a href="/2">2</a>
                    </li>
                    <li>
                        <a href="/3">3</a>
                    </li>
                    <li>
                        <a href="/4">4</a>
                    </li>
                </ul>

                <button onClick={this.click}></button>
            </div>
        )
        // on veut pas ça
        //	<ul><li> 1</li></ul>
        //	<ul><li> 2</li></ul>
        //	<ul><li> 3</li></ul>
        //	<ul><li> 4</li></ul>

        // on veut ça
        //	<ul>
        //		<li>1</li>
        //		<li>2</li>
        //		<li>3</li>
        //		<li>4</li>
        //	</ul>
    }

}

export default Quizz