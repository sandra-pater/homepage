{
    const welcome = () => {
        console.log("Cześć!")
    }

    const onButtonBacgroundClick = () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeName.innerText = "jasne";
        } else {
            themeName.innerText = "ciemne";
        }
    }

    welcome();

    let buttonBackgroud = document.querySelector(".js-button");
    let body = document.querySelector(".body");
    let themeName = document.querySelector(".themeName");

    const init = () => {
      buttonBackgroud.addEventListener("click", onButtonBacgroundClick);  
    };
    
    init();

}