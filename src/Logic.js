import {DisplayForm, Display} from "./DOM";
import { compareAsc, format } from 'date-fns';
let comptorTask = 0 ;
let cP = 1 ;
let arrayDataFormT = new Array;
let dataFormProject = new Array;

const factoryTask = (array) => {
    // créer l'objet task
    const Title = array[0];
    const Description = array[1];
    let Project = ''
    for(let i =0; i<Projects.list.length; i++){
        if(array[2] === Projects.list[i].Title){
            Project = Projects.list[i];
        }
    }
    const DueDate = array[3];
    console.log(DueDate);
    return {Title, Description, DueDate, Project}
}

const factoryProject = (array) => {
    console.log("je me suis déclanché avec cette array:", array);
    let taskArray = [];
    const Title = array[0];
    const Description = array[1];
    return {Title, Description, taskArray}
}

const newTask = () => {
    comptorTask++;
    let dataFormTask = new Array(5)
    DisplayForm.task(dataFormTask);
    DisplayForm.isClicked[0].addEventListener("click", () => {
    let objTask = factoryTask(dataFormTask);
    objTask.Project.taskArray.push(objTask);
    Display.show(objTask.Project);
    dataFormTask = [];
    })
    }

const newProject = () => {
    dataFormProject[cP] = new Array(2)
    DisplayForm.project(dataFormProject[cP]);
    DisplayForm.isClicked[1].addEventListener("click", () => {
    console.log(cP);
    console.log(dataFormProject);
    Projects.list[cP] = factoryProject(dataFormProject[cP]);
    Display.addProject(Projects.list[cP]);
    cP++;
    })
}

const Projects = {
    list : [factoryProject(["Project1", "Project de base"])]
    }
    Display.addProject(Projects.list[0]);

export {newTask, newProject}