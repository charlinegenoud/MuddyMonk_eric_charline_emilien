const square = document.querySelector(".perso");
const textleft = document.querySelector(".textleft");
const textright = document.querySelector(".textright");
const textleft2 = document.querySelector(".textleft2");
const textright2 = document.querySelector(".textright2");
//const = document.getElementById("smthng")

var scrolled;
var val;

window.addEventListener("scroll", function() {
    scrolled = window.pageYOffset;

    //console.log(scrolled);

    valperso = scrolled * 1;
    valtext = scrolled * 0.6

    console.log("val:" + val);

    console.log("---");
    console.log("valText:" + val);

    console.log("T---");

    textleft.style.transform = "translateX(" + 0.08 * valtext + "%" + ")";
    //textleft.style.wordSpacing = val;
    textright.style.transform = "translateX(" + -0.08 * valtext + "%" + ")";

    textleft2.style.transform = "translateX(" + 0.08 * valtext + "%" + ")";
    //textleft.style.wordSpacing = val;
    textright2.style.transform = "translateX(" + -0.08 * valtext + "%" + ")";


    square.style.transform = "translateY(" + 0.05 * valperso + "%" + ")";
});


// ------------- gros logo Muddy Monk --------------
var logoMM = document.querySelector(".opening");

opening.addEventListener("click", function() {



    if (logoMM == "click") {

        opening.style.display = "none";

    }





});



//----------slider---------//



window.addEventListener("scroll", function() {
    scrolled = window.pageYOffset;

    console.log(scrolled);

    val = scrolled * 1;


    //textleft.style.height = 10 * val + 20 + "px";
    //textleft.style.width = 10 * val + 20 + "px";
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