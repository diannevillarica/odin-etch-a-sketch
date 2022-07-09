const square = document.createElement("div");
square.classList.add("square");
const container = document.querySelector(".container");

// start a new sketch
function newSketch() {
  // create a 16x16 grid
  square.style.width = container.offsetWidth / 16 - 2 + "px";
  square.style.height = container.offsetHeight / 16 - 2 + "px";

  for (let i = 1; i <= 256; i++) {
    const clone = square.cloneNode(true);
    container.appendChild(clone);
  }

  hoverSquares();

  // when user clicks on the new button
  document.querySelector(".button").addEventListener("click", createSquares);

  function createSquares() {
    // prompt the user for a number but limit it to 50
    let userNum = 0;
    do {
      userNum = Number(prompt("Please enter a number between 1 to 50"));
      if (userNum === null) return;
    } while (typeof userNum === "string" || userNum > 50 || userNum === 0);

    let gridNum = userNum * userNum;

    // document.getElementsByTagName("p").innerHTML(`${userNum}x${userNum}`);

    // remove the previous squares
    function clearSquares() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    function calculateSquares() {
      square.style.width = container.offsetWidth / userNum - 2 + "px";
      square.style.height = container.offsetHeight / userNum - 2 + "px";
    }
    function cloneSquares() {
      // clone the square based on gridNum
      for (let i = 0; i < gridNum; i++) {
        const clone = square.cloneNode(true);
        container.appendChild(clone);
      }
    }

    clearSquares();
    calculateSquares();
    cloneSquares();
    hoverSquares();
  }

  function hoverSquares() {
    // randomize color option
    function randomColor() {
      let o = Math.round,
        r = Math.random,
        s = 255;
      return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s);
    }

    let color = randomColor();
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      square.addEventListener("mouseover", function () {
        this.style.backgroundColor = color;
        this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
      });
    });
  }
}

newSketch();
