const square = document.querySelector(".perso");

var scrolled;
var val;

window.addEventListener("scroll", function() {
    scrolled = window.pageYOffset;

    //console.log(scrolled);

    val = scrolled * 0.2;

    console.log("val:" + val);

    console.log("---");

    square.style.transform = "translateY(" + 0.05 * val + "%" + ")";
});


// ------------- gros logo Muddy Monk --------------
var logoMM = document.querySelector(".opening");

opening.addEventListener("click", function() {
    console.log("click");


    if (logoMM == "clicked") {

        opening.style.display = "none";

    }





});













// -------------menu burger --------------

const menu = document.querySelector(".toggle-nav");
const main = document.querySelector("main");

const burgerMenu = document.querySelector("#menu-burger");

menu.addEventListener("click", function() {
    main.classList.toggle("open");
    if (main.classList.contains("open")) {
        //menu.innerHTML = '<img src="assets/close.svg">Close';
        burgerMenu.setAttribute("class", "clicked");
    } else {
        //menu.innerHTML = '<img src="assets/menu.svg">Menu';
        burgerMenu.removeAttribute("class");
    }
});


burgerMenu.addEventListener("click", function() {
    main.classList.toggle("open");
    if (main.classList.contains("open")) {
        burgerMenu.setAttribute("class", "clicked");
    } else {
        burgerMenu.removeAttribute("class");
    }
});








// var scrolled;

// window.addEventListener('scroll', function() {

//     var value = window.scrollY;
//     scrolled = window.pageYOffset;
//     console.log(scrolled);

// });