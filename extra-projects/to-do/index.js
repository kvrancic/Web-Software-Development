const button = document.querySelector(".button-add"); 
const list = document.querySelector(".tasks");

console.log(button);

let deleteButtons = [];
let i = localStorage.getItem("counter") || 0; 

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

generateTasks(); 

function generateTasks(){
    list.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // osvjezi ako je sto doslo u memduvremenu
    tasks.forEach((task) => {
        list.innerHTML += 
        `<div class = "task" > 
            <input type="radio" id="new-task" name="task" value="unfinished"/>
            <label for="new-task">
                ${task.type}
            </label>
            <span>${task.name}</span>
            <button class="button-delete" id="${task.id}">Delete</button>
        </div>`;

        let delBtn = document.getElementById(toString(task.id));
        console.log(delBtn);
        
        delBtn.addEventListener("click", () => {
            tasks = tasks.filter(x => x.id != task.id); 
            generateTasks();
        });
    });
    
    
}


button.addEventListener("click", () => {
    tasks.push({
        name: document.getElementById("query").value,
        type: document.getElementById("business").checked ? document.getElementById("business").value : document.getElementById("Personal").value,
        id: i
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))

    i++;
    localStorage.setItem("counter", i);

    generateTasks();
})
