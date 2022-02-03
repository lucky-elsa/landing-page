import("../styles/sass/main.scss");
import html from "../index.html";
import ScrollMagic from "scrollmagic";

const menuButtonOpen = document.querySelector(".s-header__burger");
const menuButtonClose = document.querySelector(".menu__close-burger");
const menu = document.querySelector(".s-header__menu");

menuButtonOpen.addEventListener("click", function () {
    menu.classList.remove("hidden");
});

menuButtonClose.addEventListener("click", function () {
    menu.classList.add("hidden");
});
