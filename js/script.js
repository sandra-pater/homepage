    console.log("Cześć!")

let button__background = document.querySelector(".button__background");


let jsbutton = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

jsbutton.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "ciemne";
    }
});

