import "./styles/main.scss";
import { model } from "./model";
import { Site } from "./classes/Site";
import { Sidebar } from "./classes/Sidebar";

const site = new Site("#site");

site.render(model);

const sidebar = new Sidebar("#panel");


