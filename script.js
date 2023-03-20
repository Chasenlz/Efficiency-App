const clickButton = document.getElementById("clickButton");
const clickCounter = document.getElementById("clickCounter");

let clicks = 0;

clickButton.addEventListener("click", () => {
  clicks++;
  clickCounter.textContent = `${clicks} ${clicks === 1 ? "click" : "clicks"}`;
});
