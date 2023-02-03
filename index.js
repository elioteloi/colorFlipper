const colors = ["yellow", "blue", "red"];
const button = document.querySelector("#button");

button.addEventListener("click", function () {
  const randomColors = getRandomColors();

  document.body.style.backgroundColor = colors[randomColors];
});

function getRandomColors() {
  return Math.floor(Math.random() * colors.length);
}
