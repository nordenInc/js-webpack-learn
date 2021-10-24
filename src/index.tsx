import Post from "./components/Post";
import "./styles/main.scss";
import json from "./assets/jsontest";
import "./babel";

import React from "react";
import { render } from "react-dom";

const phonePost = new Post("Krasnoyarsk", "Iphone XR");

console.log(phonePost.toString());
console.log(json);


const App: React.FC = () => {
  return (
    <div className="container">
      <div className="logo"></div>
      <div>BMW Group</div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
