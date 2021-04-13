import React from "react";
import Featured from "./components/featured";
import Header from "./components/header-footer/Header";
import "./assets/styles/style.css"




function App() {
  return (
    <div style={{height:"1500px", backgroundColor:"lightblue"}}>
    <Header/>
    <Featured/>
    </div>
  );
}

export default App;
