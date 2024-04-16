const monthIndex = new Date().getMonth(); 
console.log(monthIndex);

const months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const monthsText = document.querySelector(".date h1"); 
monthsText.innerText = months[monthIndex];

const fullDate = document.querySelector(".date p"); 
fullDate.innerText = new Date().toDateString();

const LastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate(); 
const FirstDay = new Date(new Date().getFullYear(), monthIndex, 0).getDay() - 1 ; // - 1 jer počinje nedjeljom u js 

let days = ""; 

for(let i = FirstDay; i >= 0; i--){
    days += `<div class = "empty"></div>`;
}

for(let i = 1; i <= LastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`; 
    }
    else days += `<div>${i}</div>`; 
}

const daysElement= document.querySelector(".days"); 
daysElement.innerHTML = days;




