'use strict'

let features = document.getElementById("features-nav");
let nav = document.getElementById("main-nav");

features.addEventListener("click", function () {
    nav.classList.remove("show");
});