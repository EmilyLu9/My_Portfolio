//Scroll up to top
const scrollUp = document.querySelector("#scroll-up"); // Select the button with the id. Can use querySelector or getElementById

scrollUp.addEventListener('click', ()=> { // get the user's click action
    window.scrollTo({ // exploit the scrollTo part of the windows object to make the button functional
        top: 0, //page scrolls to the top and left side
        left:0,
        behavior:"smooth",
    });
});

//Hamburger Menu
//Select the hamburger menu bars
const burger = document.querySelector("#burger-menu");
//Select the list items (the nav links altogether)
const ul = document.querySelector("nav ul");
//select the container itself(the nav element)
const nav = document.querySelector("nav");

//Toggle the nav ul.show class when clicks the menu bar
burger.addEventListener("click", ()=>{
    ul.classList.toggle("show");
});