import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      director: "",
      stars: "",
      image: "",
      description: "",
    };
    // this.userClick = this.userClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/movies/")
      .then((response) => response.json())
      .then((result) => {
        console.log("# 1 result:", result);


        // this.setState({
        // });
      });
  }

  getCountry(country) {
    fetch("http://localhost:8000/movies/1")
      .then((response) => response.json())
      .then((result) => {
        // let details = result.movieDetails[0];
        console.log("# 2 result movieDetails:", result);
       
        // this.setState({
        //   title: details.title,
        //   director: details.director,
        //   stars: details.stars,
        //   image: details.image,
        //   description: details.description,
        // });
      })
      
      .catch((err) => console.log(err));
  }

  //   userClick(event) {
  //     console.log("event.target.value", event.target.value);

  //     this.setState({
  //       name: event.target.value,
  //     });
  //   }
  render() {
   
    return (

    <div >
     {this.getCountry()}
      
    </div>
    );
  }
}

export default Card;
