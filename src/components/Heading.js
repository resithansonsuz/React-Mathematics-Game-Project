import "../App.css"; 
import React from "react";

//I created the component that will create the header.
const Heading =({headline})=>(
 
  <div className="Title">
    <h1>{headline}</h1>
  </div>
  
);
export default Heading;