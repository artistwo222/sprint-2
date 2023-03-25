
"use strict";

const featuresNav = document.getElementById("features-nav");
const mainNav = document.getElementById("main-nav");

featuresNav.addEventListener("click", function () {
    mainNav.classList.remove("show");
});
