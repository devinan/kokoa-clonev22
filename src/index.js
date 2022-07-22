const screen = document.querySelector("#no-mobile");

function handleResize() {
  const width = window.innerWidth;
  const screenClass = screen.classList;
  screenClass.toggle("no-mobile--display", width > 645);
  screenClass.toggle("mobile--display", width <= 645);
}

function init() {
  handleResize();
}

init();

window.addEventListener("resize", handleResize);
