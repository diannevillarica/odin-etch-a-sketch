const square = document.createElement("div");
square.classList.add("square");
const container = document.querySelector(".container");

// start a new sketch
function newSketch() {
  // create a 16x16 grid
  for (let i = 0; i <= 256; i++) {
    const clone = square.cloneNode(true);
    container.appendChild(clone);
  }
  hoverSquares();

  // when user clicks on the new button
  document.querySelector(".new").addEventListener("click", createSquares);

  function createSquares() {
    // prompt the user for a number but limit it to 100
    let userNum = 0;
    do {
      userNum = Number(prompt("Please enter a number between 1 to 100"));
      if (userNum === null) return;
    } while (typeof userNum === "string" || userNum > 100 || userNum === 0);

    let gridNum = userNum * userNum; // test only

    // remove the previous squares
    function clearSquares() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    //calcuate grdiNum W x H
    function calculateSquares() {
      square.style.width = "50px"; // test only
      square.style.height = "50px"; // test only
    }

    function cloneSquares() {
      // clone the square based on gridNum
      for (let i = 0; i < gridNum; i++) {
        console.log(gridNum);
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
    // listen for hover, each hover adds 10% darker to a square until its 100% black.
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      square.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
        this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
      });
    });
  }
}

newSketch();
