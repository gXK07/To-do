
const DisplayForm = {
    isClicked : [document.createElement("button"),document.createElement("button")],
    task(dataFormTask){
        //creation du formulaire
        let form = document.createElement("form");
        Container.appendChild(form);
        const formFields = new Array(6);
        for(let i=0; i<6; i++){
            formFields[i] = document.createElement("input");
            form.appendChild(formFields[i]);
            formFields[i].classList.add("formfield");
        }
        formFields[0].setAttribute("id", "Title");
        formFields[0].setAttribute("placeholder", "Title");
        formFields[1].setAttribute("id", "Description");
        formFields[1].setAttribute("placeholder", "Description");
        formFields[2].setAttribute("id", "Project");
        formFields[2].setAttribute("placeholder", "Project");
        formFields[3].setAttribute("class", "DueDate");
        formFields[3].setAttribute("type", "Date");
        formFields[4].setAttribute("type", "button");
        formFields[4].setAttribute("id", "submit");
        formFields[5].setAttribute("type", "button");
        formFields[5].setAttribute("id", "cancel");


        //actions à faire quand on click sur "submit"
        formFields[4].onclick = () => {
            // if(dataFormTask[0] === undefined){
            //     alert("choose a title");
            // }
            // else{
            for(let i=0; i< 5; i++){
                dataFormTask[i] = formFields[i].value
            }
            
            //déclanche la suite de "newtask" dans le fichier "Logic.js"
            this.isClicked[0].click();
            //deleteForm()
            for(let i=0; i<6; i++){
                form.removeChild(formFields[i])
                formFields[i] = null;
            }
            Container.removeChild(form);
            form = null;
        // }
            
        }

        formFields[5].onclick = () =>{
            for(let i=0; i<6; i++){
                form.removeChild(formFields[i])
                formFields[i] = null;
            }
            Container.removeChild(form);
            form = null;
        }
    
    },
    project(dataFormProject){
        let form = document.createElement("form");
        Container.appendChild(form);
        // creation form du projet 
        const formFields = new Array(4);
        for(let i=0; i<4; i++){
            formFields[i] = document.createElement("input");
            form.appendChild(formFields[i]);
            formFields[i].classList.add("formfield");
        }
        formFields[0].setAttribute("id", "Title");
        formFields[0].setAttribute("placeholder", "Title");
        formFields[1].setAttribute("id", "Description");
        formFields[1].setAttribute("placeholder", "Description");
        formFields[2].setAttribute("type", "button");
        formFields[2].setAttribute("id", "submit");
        formFields[3].setAttribute("type", "button");
        formFields[3].setAttribute("id", "cancel");

        formFields[2].onclick = () => {
            // chopper le id="projectfield" et regarder les element a l'intéieur pour la boucle
            // let use = false;
            // for(let i=0; i<; i++){
            //     if(dataFormProject)
            // }
            for(let i=0; i< 2; i++){
                dataFormProject[i] = formFields[i].value
            }
            this.isClicked[1].click(); // c'est ca qui déclanche la boucle
            for(let i=0; i<4; i++){
                form.removeChild(formFields[i])
                formFields[i] = null;
            }
            Container.removeChild(form);
            form = null;
        }

        formFields[3].onclick = () =>{
            for(let i=0; i<4; i++){
                form.removeChild(formFields[i])
                formFields[i] = null;
            }
            Container.removeChild(form);
            form = null;
        }
    }
}
const Display = {
    task(Task){
        const TaskList = document.getElementById("TaskList");
        const taskField = document.createElement("div");
        taskField.setAttribute("id", "taskField");
        TaskList.appendChild(taskField);
        let fieldT = new Array(4);
        for(let i=0; i<3; i++){
            fieldT[i] = document.createElement("div");
            taskField.appendChild(fieldT[i])
            fieldT[i].classList.add("fieldT");
        }
        fieldT[0].textContent = Task.Title;
        fieldT[1].textContent = Task.Description;
        fieldT[2].textContent = Task.DueDate;
        fieldT[2].setAttribute("class", "DueDate");
    
        fieldT[3] = document.createElement("button");
        fieldT[3].setAttribute("id", "delete");
        taskField.appendChild(fieldT[3]);
        // deleteTask
        fieldT[3].onclick = () => {
            console.log("deleted !")
            const Project = Task.Project
            const index = Project.taskArray.indexOf(Task);
            Project.taskArray.splice(index, 1);
            this.show(Project);
            

        }
    },
    addProject(Project) {
            const projectList = document.getElementById("ProjectList");
            const projectField = document.createElement("div");
            projectField.classList.add("projectField");
            projectList.appendChild(projectField);
            projectField.setAttribute("id", Project.Title);
            projectField.textContent = Project.Title;
            projectField.addEventListener("click", () => {this.show(Project)})
        },
        // affiche les taches d'un projet dans la zone de droite
    show(project){  

        const TaskList = document.getElementById("TaskList");
        while (TaskList.firstChild) {
            TaskList.removeChild(TaskList.lastChild);
          }
        for(let i=0; i<project.taskArray.length; i++){
            this.task(project.taskArray[i]);
        }
        // met le curseur sur le project quand on affiche ses taches
        const allFileds = document.getElementsByClassName("projectField")
        for(let i=0; i<allFileds.length; i++){
        allFileds[i].classList.remove("onclick");
        }
        const thisField = document.getElementById(project.Title);
        thisField.classList.add("onclick")
    }
    }

export {DisplayForm, Display}