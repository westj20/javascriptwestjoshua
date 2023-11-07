"use strict";
let tiltyTable = document.getElementById("tiltyTable");
let draggableBoxes = document.getElementsByClassName("box");

let zIndexCounter = 0;
let startingX, startingY;
let boxX, boxY;

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", tilt, false);
}

draggableBoxes[0].onclick = function () {
  let boxCopy = this.cloneNode(true);
  // Set a new unique ID for the cloned box
  boxCopy.id = "boxCopy" + Date.now();
  tiltyTable.appendChild(boxCopy);
  boxCopy.addEventListener("pointerdown", grabBox);
};

function grabBox(e) {
  startingX = e.clientX;
  startingY = e.clientY;

  e.target.style.touchAction = "none";
  zIndexCounter++;
  e.target.style.zIndex = zIndexCounter;

  boxX = e.target.offsetLeft;
  boxY = e.target.offsetTop;

  e.target.addEventListener("pointermove", moveBox);
  e.target.addEventListener("pointerup", dropBox);
}

function moveBox(e) {
  let currentX = e.clientX;
  let currentY = e.clientY;

  let deltaX = currentX - startingX;
  let deltaY = currentY - startingY;

  // Calculate the new position of the box
  boxX += deltaX;
  boxY += deltaY;

  // Set the position of the target
  e.target.style.left = boxX + "px";
  e.target.style.top = boxY + "px";

  // Update startingX and startingY for the next move event
  startingX = currentX;
  startingY = currentY;
}

function dropBox(e) {
  e.target.removeEventListener("pointermove", moveBox);
  e.target.removeEventListener("pointerup", dropBox);
}
let lastBeta = 0;
let lastGamma = 0;

function tilt(e) {
  let diffBeta, diffGamma;
  for (let i = 0; i < tiltyTable.children.length; i++) {
    let elemRect = tiltyTable.children[i].getBoundingClientRect();
    diffBeta = e.beta - lastBeta;
    diffGamma = e.gamma - lastGamma;

    let red = 255 - Math.abs(diffBeta) * 60;
    let green = 1000 - Math.abs(diffGamma) * 5;
    let blue = 5000 - (Math.abs(diffBeta) + Math.abs(diffGamma)) * 50;

    tiltyTable.children[
      i
    ].style.backgroundColor = `rgb(${red},${green},${blue})`;

    tiltyTable.children[i].style.top = elemRect.top + diffBeta + "px";
    tiltyTable.children[i].style.left = elemRect.left + diffGamma + "px";
  }
  lastBeta = e.beta;
  lastGamma = e.gamma;
}
