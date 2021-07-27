import {DisplayForm, Display} from "./DOM";


const factoryTask = (array) => {
    // créer l'objet task
    const Title = array[0];
    const Description = array[1];
    const Project = array[2]
    const DueDate = array[3];
    const Priority = array[4];
    const CheckList = array[5];
    return {Title, Description, DueDate, Priority, CheckList, Project}
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
    DisplayForm.isClicked.addEventListener("click", () => {
    let objTask = factoryTask(dataFormTask);
    for(let i=0; i<Projects.list.length; i++){
        if(objTask.Project === Projects.list[i].Title){
            Projects.list[i].taskArray.push(objTask);
            console.log(Projects.list[i])
            Display.show(Projects.list[i])
        }
    }
    // pour l'instant je pousse tout dans le project de base mais apres faudra faire une boucle pour pousser en fonction de "=== obj.title"
    // Projects.list[0].taskArray.push(objTask);
    // Display.task(objTask);
    })
    }

const newProject = () => {
    let dataFormProject = new Array(2)
    DisplayForm.project(dataFormProject);
    DisplayForm.isClicked.addEventListener("click", () => {
    let objProject = factoryProject(dataFormProject);
    Projects.list.push(objProject);
    Display.addProject(objProject);
    })
}

const Projects = {
    list : [factoryProject(["Project1", "Project de base"])]
    }
    Display.addProject(Projects.list[0]);

export {newTask, newProject}