let menu = document.querySelector("#menu-icon");
let navLink = document.querySelector(".nav-links");


menu.addEventListener("click", function(){
    navLink.classList.toggle("active");
});

window.onscroll = () => {
    navLink.classList.remove('active');
};