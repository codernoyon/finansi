const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav_links');


menu.addEventListener('click', function () {
    navLinks.classList.toggle('active')
    // if (navLinks.style.top == "-400px") {
    //     sideNav.style.top = "65px";
    // }
    // else {
    //     navLinks.style.top = "65px";

    // }
});