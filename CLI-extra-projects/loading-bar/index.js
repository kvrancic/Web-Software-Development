const counter = document.querySelector(".percentage"); 
const line = document.querySelector(".line"); 

let i = 0; 

update();
function update(){
    i += 1; 
    line.style.width = `${i/2}vh`;
    counter.innerText =  i + "%";
    if(i < 100){
        setTimeout(update, 20)
    }
}