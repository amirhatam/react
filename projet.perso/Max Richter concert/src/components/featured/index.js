import React from "react";
import Carrousel from "./Carrousel";

function Featured() {
  return (
      
    <div style={{ position: "relative" }}>

      <Carrousel />

      <div className="artist-name" >
        <div className="wrapper" >Max Richter</div>
      </div>
    </div>
  );
}

export default Featured;
