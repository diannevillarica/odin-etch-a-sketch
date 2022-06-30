const square = document.createElement("div");
square.classList.add("square");
const container = document.querySelector(".container");

// start a new sketch
function newSketch() {
  // prompt the user for a number but limit it to 100
  let userNum = 2;
  let gridNum = userNum * userNum; // test only

  // create a 16x16 grid
  for (let i = 0; i < 5; i++) {
    const clone = square.cloneNode(true);
    container.appendChild(clone);
    // clone.style.backgroundColor = "pink";
    // square.cloneNode(true);
  }

  // when user clicks on the button
  document.querySelector(".new").addEventListener("click", createSquares);

  function createSquares() {
    console.log("createSquares");

    // remove the previous squares
    function clearSquares() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    //calcuate grdiNum W x H
    function calculateSquares() {
      square.style.width = "100px"; // test only
      square.style.height = "100px"; // test only
    }

    function cloneSquares() {
      console.log("cloneSquares");
      // clone the sqaure based on gridNum
      for (let i = 0; i < gridNum; i++) {
        console.log(gridNum);
        const clone = square.cloneNode(true);
        container.appendChild(clone);
      } // make this much squares, spread evenly across the container
    }
    clearSquares();
    calculateSquares();
    cloneSquares();
  }

  function hoverSquares() {
    console.log("hoverSquare");
    // listen for hover, each hover adds 10% darker to a square until its 100% black.
  }
}

newSketch();
