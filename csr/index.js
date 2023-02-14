const $root = document.getElementById("root");

const content = `
<h1>CSR을 배워보자</h1>
<div id='canvas' style='width: 300px; height: 200px; border: 3px solid red;'></div>
<button id='btn'>배경 바꾸기</button>
`;

$root.innerHTML = content;

let isColorGreen = false;
const $btn = document.getElementById("btn");
$btn.addEventListener("click", () => {
  const $canvas = document.getElementById("canvas");

  if (isColorGreen) {
    $canvas.style.backgroundColor = "red";
  } else {
    $canvas.style.backgroundColor = "green";
  }

  isColorGreen = !isColorGreen;
});
