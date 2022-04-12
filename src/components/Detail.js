import "../App.css";
import React from "react";
//I created the detail component that will show the total points, total laps and total correct count.
const Detail = ({ contents }) => (
  <div className="Detail">
    <span>{contents}</span>
  </div>
);
export default Detail;
