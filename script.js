"use strict";

const btnNext = document.querySelector(".btn-next");
const codebox = document.querySelector(".codebox");
const input = document.querySelector(".input-code");
const pond = document.querySelector(".pond");
const frogContainer = document.querySelector(".frog-container");
const padContainer = document.querySelector(".pad-container");

btnNext.addEventListener("click", function () {
  if (
    frogContainer.getBoundingClientRect().x ===
    padContainer.getBoundingClientRect().x
  ) {
    codebox.classList.remove("codebox-animation");
    window.open("index2.html", "_self");
  } else {
    codebox.classList.add("codebox-animation");
    setTimeout(function () {
      codebox.classList.remove("codebox-animation");
    }, 501);
  }
});

input.addEventListener("input", function () {
  btnNext.classList.remove("btn-next-animation");
  btnNext.classList.add("disable");
  const code = input.value;
  pond.style.cssText = code;
  if (
    frogContainer.getBoundingClientRect().x ===
    padContainer.getBoundingClientRect().x
  ) {
    timeout = setTimeout(() => {
      btnNext.classList.add("btn-next-animation");
      btnNext.classList.remove("disable");
    }, 100);
  }
});

/*
const nextPage = document.createElement("a");
nextPage.href = "https://www.google.com";

btnNext.appendChild(nextPage);
nextPage.click();
*/
