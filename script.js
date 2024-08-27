
let menuBar = document.querySelector("#menu");
let navBar = document.querySelector(".navbar");

menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}