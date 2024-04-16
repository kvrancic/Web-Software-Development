const LeftContainerElement = document.querySelector(".left h1"); 
const RightContainerElement = document.querySelector(".right h1"); 
window.addEventListener("mousemove", (event) =>{
    LeftContainerElement.innerText = event.clientX;
    RightContainerElement.innerText = event.clientY;
})