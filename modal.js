"use strict";

var modal = document.getElementById("my-modal");
var overlay = document.getElementsByClassName("overlay")[0];
var close = document.querySelectorAll("#close");

// Modal Open Function
var opendialog = function () {
  modal.classList.add("d-block");
  modal.classList.remove("d-none");
  overlay.classList.remove("d-none");
  overlay.classList.add("d-block");
};

// Modal Close function

var closeDialog = function () {
  modal.classList.remove("d-block");
  modal.classList.add("d-none");
  overlay.classList.add("d-none");
  overlay.classList.remove("d-block");
};

// Click eventlistner for showing modal
document.getElementById("show-modal").addEventListener("click", opendialog);

// Adding for loop for selecting all #close id
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", closeDialog);
}
