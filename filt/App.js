import React from "react";
import ReactDOM from "react-dom";
import Maxin from "./components/Maxin";

const words = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
  <Maxin words={words} />,
  document.getElementById('container') 
);

