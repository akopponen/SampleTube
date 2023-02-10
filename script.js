var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
let profileMenu = document.getElementById("profileMenu");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}
// https://youtu.be/4ykAepVkG5Y?t=4964 | Kohta 1:22:44