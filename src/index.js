import './style.css';
import {newTask, newProject} from "./Logic";
// import {Cross, Project} from "./Icons";
const task = document.getElementById("newTask");
const proj = document.getElementById("newPro");

task.onclick = newTask;
proj.onclick = newProject;