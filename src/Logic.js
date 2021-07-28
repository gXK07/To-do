import {DisplayForm, Display} from "./DOM";
import { compareAsc, format } from 'date-fns';


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
    return {Title, Description, DueDate, Project}
}

const factoryProject = (array) => {
    let taskArray = [];
    const Title = array[0];
    const Description = array[1];
    return {Title, Description, taskArray}
}

const newTask = () => {
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
    let dataFormProject = new Array(2)
    DisplayForm.project(dataFormProject);
    DisplayForm.isClicked[1].addEventListener("click", () => {
    let objProject = factoryProject(dataFormProject);
    Projects.list.push(objProject);
    Display.addProject(objProject);
    dataFormProject =[];
    })
}

const Projects = {
    list : [factoryProject(["Project1", "Project de base"])]
    }
    Display.addProject(Projects.list[0]);

export {newTask, newProject}