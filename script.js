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

    valperso = scrolled * 1.2;
    valtext = scrolled * 0.6;

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

//---------SLIDER CAROUSEL----//

const previousButtonNew = document.querySelector(".avant");

const nextButtonNew = document.querySelector(".suivant");

const text = document.querySelector(".description");

const sliderImage = document.querySelector(".slider");

var pageNumber = 0;

const content = [{
        text: "Vinyl",

        backgroundImage: "url('images/slider1.webp')",
    },

    {
        text: "Casette",

        backgroundImage: "url('images/slider2.jpeg')",
    },

    {
        text: "Merch",

        backgroundImage: "url('images/slider3.jpeg')",
    },
];

previousButtonNew.addEventListener("click", function(event) {
    previous();

    console.log("papapa");

    console.log("--");
});

nextButtonNew.addEventListener("click", function(event) {
    next();

    console.log("hgfhjgfjh");

    console.log("--");
});

const next = function() {
    pageNumber = pageNumber + 1;

    if (pageNumber >= 3) {
        pageNumber = 0;
    }

    updateText();
};

const previous = function() {
    pageNumber = pageNumber - 1;

    if (pageNumber < 0) {
        pageNumber = 3;
    }

    updateText();
};

const updateText = function() {
    text.innerHTML = content[pageNumber].text;

    sliderImage.style.backgroundImage = content[pageNumber].backgroundImage;
};

updateText();

// var scrolled;

// window.addEventListener('scroll', function() {

//     var value = window.scrollY;
//     scrolled = window.pageYOffset;
//     console.log(scrolled);

// });