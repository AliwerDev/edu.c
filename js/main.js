const times = document.querySelector("#times");
const bar = document.querySelector("#bar");
const nav = document.querySelector("#nav");
const bg = document.querySelector("#bg");
const signinI = document.querySelector("#loginI");
const signinT = document.querySelector("#loginT");

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
function hideNav(){
    nav.style.right = ("-250px");
    signinT.classList.toggle("display-none");
    signinI.classList.toggle("d-none");
    bar.classList.remove("d-none");
    bg.classList.toggle("d-none");
}
function showNav(){
    nav.style.right = ("0");
    signinT.classList.toggle("display-none");
    signinI.classList.toggle("d-none");
    bar.classList.add("d-none");
    bg.classList.toggle("d-none");
}
function rotate(){
    times.style.rotate = ("360deg");
}
