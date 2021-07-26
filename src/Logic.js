import {DisplayForm, Display} from "./DOM";

const factoryTask = (array) => {
    // créer l'objet task
    const Title = array[0];
    const Description = array[1];
    const DueDate = array[2];
    const Priority = array[3];
    const CheckList = array[4];
    return {Title, Description, DueDate, Priority, CheckList}
}

const factoryProject = () => {
    // logic
    console.log("étape 2 : créer le project");
}

const newTask = () => {
    let isClicked = false
    DisplayForm.task(isClicked);
    if(isClicked === true){
    let objTask = factoryTask(dataForm);
    Display.task(objTask);
    }
    }



const newProject = () => {
    DisplayForm.project();
    factoryProject();
    Display.project()
}

export {newTask, newProject}