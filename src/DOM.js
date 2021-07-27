

const DisplayForm = {
    isClicked : document.createElement("button"),
    task(dataFormTask){
        //creation du formulaire
        let form = document.createElement("form");
        Container.appendChild(form);
        const formFields = new Array(7);
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
        formFields[3].setAttribute("id", "DueDate");
        formFields[3].setAttribute("placeholder", "DueDate");
        formFields[4].setAttribute("type", "button");
        formFields[4].setAttribute("id", "submit");
        formFields[5].setAttribute("type", "button");
        formFields[5].setAttribute("id", "cancel");
        formFields[5].textContent = "cancel";



        //actions à faire quand on click sur "submit"
        formFields[4].onclick = () => {
            for(let i=0; i< 5; i++){
                dataFormTask[i] = formFields[i].value
            }
            //déclanche la suite de "newtask" dans le fichier "Logic.js"
            this.isClicked.click();
        }
    
    },
    project(dataFormProject){
        let form = document.createElement("form");
        Container.appendChild(form);
        // creation form du projet 
        const formFields = new Array(3);
        for(let i=0; i<3; i++){
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

        formFields[2].onclick = () => {
            console.log("click")
            for(let i=0; i< 2; i++){
                dataFormProject[i] = formFields[i].value
            }
            //deleteForm()
            this.isClicked.click();
        }
    }
}
const Display = {
    task(Task){
        const TaskList = document.getElementById("TaskList");
        const taskField = document.createElement("div");
        taskField.setAttribute("id", "taskField");
        TaskList.appendChild(taskField);
        let fieldT = new Array(5);
        for(let i=0; i<5; i++){
            fieldT[i] = document.createElement("div");
            taskField.appendChild(fieldT[i])
            fieldT[i].classList.add("fieldT");
        }
        fieldT[0].textContent = Task.Title;
        fieldT[1].textContent = Task.Description;
        fieldT[2].textContent = Task.date;
        fieldT[3].textContent = Task.Priority;
        fieldT[4].textContent = Task.Projet;
    },
    addProject(Project) {
            const projectList = document.getElementById("ProjectList");
            const projectField = document.createElement("div");
            projectField.setAttribute("id", "projectField");
            projectList.appendChild(projectField);
            let fieldP = new Array(2);
            for(let i=0; i<3; i++){
                fieldP[i] = document.createElement("div");
                projectField.appendChild(fieldP[i])
                fieldP[i].classList.add("fieldP");
            }
            fieldP[0].textContent = Project.Title;
            fieldP[1].textContent = Project.Description;
            projectField.addEventListener("click", () => {this.show(Project)})
        },
    show(project){
        // pour la partie ou quand faut clicker sur un project pour que ca affiche ses taches :
        // 1) vider le <div> TaskList
        // 2) faire une loop sur l'array ArrayTask du project passer en argument et afficher toutes taches dans task list avec DisplayTask
        const TaskList = document.getElementById("TaskList");
        while (TaskList.firstChild) {
            TaskList.removeChild(TaskList.lastChild);
          }
        for(let i=0; i<project.taskArray.length; i++){
            this.task(project.taskArray[i]);
        }
    }
    }

export {DisplayForm, Display}