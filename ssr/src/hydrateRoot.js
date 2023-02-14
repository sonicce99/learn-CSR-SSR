let isColorGreen = false;

const hydrateRoot = () => {
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
};

hydrateRoot();
