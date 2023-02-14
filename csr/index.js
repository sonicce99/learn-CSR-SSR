import { Content } from "./component.js";

let isColorGreen = false;

const render = () => {
  const $root = document.getElementById("root");
  $root.innerHTML = Content;
  $root.querySelector("button").addEventListener("click", () => {
    const $canvas = document.getElementById("canvas");

    if (isColorGreen) {
      $canvas.style.backgroundColor = "red";
    } else {
      $canvas.style.backgroundColor = "green";
    }

    isColorGreen = !isColorGreen;
  });
};

render();
