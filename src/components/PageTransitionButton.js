import "../App.css";
import React from "react";
import TransitionButtonIcon from "../constants/icons/transitionButtonIcon";

import { Link } from "react-router-dom";
//Component of the buttons that will provide the transition between the pages.
const PageTransitionButton = ({name}) => (
  <div className="TransitionButtons">
    <TransitionButtonIcon />
    <Link to="/questionsPage">{name}</Link>
  </div>
);
export default PageTransitionButton;
