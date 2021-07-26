const DisplayForm = {
    task(isClicked){
        let dataForm = new Array(5)
        // étape 1 : Afficher le formulaire d'une nouvelle tache
        const form = document.createElement("form");
        Container.appendChild(form);
        // créeation form de la task 
        const formFields = new Array(6);
        for(let i=0; i<6; i++){
            formFields[i] = document.createElement("input");
            form.appendChild(formFields[i]);
        }
        formFields[0].setAttribute("id", "Title");
        formFields[0].setAttribute("placeholder", "Title");
        formFields[1].setAttribute("id", "Description");
        formFields[1].setAttribute("placeholder", "Description");
        formFields[2].setAttribute("id", "DueDate");
        formFields[2].setAttribute("placeholder", "DueDate");
        formFields[3].setAttribute("id", "Priority");
        formFields[3].setAttribute("type", "radio");
        formFields[4].setAttribute("id", "CheckList");
        formFields[4].setAttribute("Type", "checkbox");
        formFields[5].setAttribute("type", "button");
        formFields[5].setAttribute("id", "submit");

        formFields[5].onclick = () => {
            for(let i=0; i< 5; i++){
                dataForm[i] = formFields[i].value
            }
            console.log("je suis rentré dans DOM")
            isClicked = true;
            //deleteForm()
            return dataForm;
        }
    
    },
    project(){
        console.log("étape 1 : Afficher le formulaire d'un nouveau project");
        const form = document.createElement("form");
        Container.appendChild(form);
        // creation form du projet 
        const formFields = new Array(3);
        for(let i=0; i<3; i++){
            formFields[i] = document.createElement("input");
            form.appendChild(formFields[i]);
        }
        formFields[0].setAttribute("id", "Title");
        formFields[0].setAttribute("placeholder", "Title");
        formFields[1].setAttribute("id", "Description");
        formFields[1].setAttribute("placeholder", "Description");
        formFields[2].setAttribute("type", "submit");
        formFields[2].setAttribute("id", "submit");
    }
}

const Display = {
    task(Task){
        const TaskList = document.getElementById("TaskList");
        const taskField = document.createElement("div");
        taskField.setAttribute("id", "taskField");
        TaskList.appendChild(taskField);
        let field = new Array(5);
        for(let i=0; i<5; i++){
            field[i] = document.createElement("div");
            taskField.appendChild(field[i])
            field[i].classList.add("field");
        }
        field[0].textContent = Task.Title;
        field[1].textContent = Task.Description;
        field[2].textContent = Task.date;
        field[3].textContent = Task.Priority;
        field[4].textContent = Task.Projet;
    },
    project() {
        console.log("étape 3 : Afficher le nouveau project");
    }
}

export {DisplayForm, Display}