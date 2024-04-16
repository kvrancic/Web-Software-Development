const button = document.querySelector(".button-add"); 
const list = document.querySelector(".tasks");

console.log(button);

let deleteButtons = [];
let i = localStorage.getItem("counter") || 0; 

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

generateTasks(); 

function generateTasks(){
    tasks.forEach((task) => {
        list.innerHTML += 
        `<div class = "task"> 
            <input type="radio" id="new-task" name="task" value="unfinished"/>
            <label for="new-task">
                ${task.type}
            </label>
            <span>${task.name}</span>
            <button class="button-delete">Delete</button>
        </div>`
        deleteTask();
    }
    )
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

    list.innerHTML += 
    `<div class = "task"> 
        <input type="radio" id="new-task" name="task" value="unfinished"/>
        <label for="new-task">
            ${document.getElementById("business").checked ? document.getElementById("business").value : document.getElementById("Personal").value}
        </label>
        <span>${document.getElementById("query").value}</span>
        <button class="button-delete">Delete</button>
    </div>`
    deleteTask();
})

function deleteTask(){
    deleteButtons = document.querySelectorAll(".button-delete");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            deleteDiv = deleteButton.parentNode; 
            deleteDiv.remove();
        })
    });
}