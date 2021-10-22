import Post from "./components/Post";
import "./styles/main.scss";
import json from "./assets/jsontest.json";

const phonePost = new Post("Krasnoyarsk", "Iphone XR");

console.log(phonePost.toString());
console.log(json);
