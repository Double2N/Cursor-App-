const cursor = document.querySelector(".cursor");
//console.log(cursor);

document.addEventListener("mousemove", function (event) {
  // evnet.pageX --> across
  // event.pageY --> up and down
  console.log(event);
  moveCursor(event.pageX, event.pageY);
});

// Let create variable wich hold function created position of cursor and movment of cursor
const moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
