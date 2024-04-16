const barEl = document.querySelector(".fa-solid");
const menuEl = document.querySelector(".menu")

console.log(barEl);

barEl.addEventListener("click", ()=>{
    console.log("Clicked");
    menuEl.classList.toggle("noShow");
});