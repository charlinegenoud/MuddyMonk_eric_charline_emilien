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