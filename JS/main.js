//menu
const menu = document.querySelector(".navbar-links")
const menuBtn = document.querySelector(".navbar-icons")
const overlay = document.querySelector("#overlay")

menuBtn.addEventListener('click',()=> {
    menu.classList.toggle("navbar-open")
    menuBtn.classList.toggle("open")
    overlay.classList.toggle("show")
})

overlay.addEventListener("click",()=>{
    menu.classList.toggle("navbar-open")
    menuBtn.classList.toggle("open")
    overlay.classList.toggle("show")
})