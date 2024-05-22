let hover = document.getElementById("hover");
var borderRect = hover.getBoundingClientRect();
hover.addEventListener("mousemove", (e) => {
  if (
    e.clientX < borderRect.right / 2 &&
    e.clientY > 1.5 * borderRect.top &&
    e.clientY < 0.7 * borderRect.bottom
  ) {
    hover.setAttribute("class", "left");
  } else if (
    e.clientX > borderRect.right / 2 &&
    e.clientY > 1.5 * borderRect.top &&
    e.clientY < 0.7 * borderRect.bottom
  ) {
    hover.setAttribute("class", "right");
  } else if (e.clientY <= 1.5 * borderRect.top) {
    hover.setAttribute("class", "up");
  } else {
    hover.setAttribute("class", "down");
  }
  console.log(hover.getAttribute("class"));
});
