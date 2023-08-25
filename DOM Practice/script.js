const moon = document.querySelector("#moon");
const transitionButton = document.querySelector("#transitionButton");
const cover = document.querySelector(".cover");
let leftPosition = 0;

let isFullMoon = false;

transitionButton.addEventListener("click", () => {
  if (isFullMoon) {
    moon.style.backgroundColor = "#333";
  } else {
    moon.style.backgroundColor = "#fff"; 
  }
  isFullMoon = !isFullMoon;

  cover.classList.add("moved")
});
