const canvas = document.getElementById("pixelCanvas");
const submit = document.querySelector("input[type=submit]");
initialRows = 10;
 initialCols = 5;

function makeGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    canvas.appendChild(document.createElement("tr"));
    for (let j = 0; j < cols; j++) {
  canvas.lastChild.appendChild(document.createElement("td"));
    }
    }
}

//Step 2//

function startListener() {
  const gridBlocks = document.getElementsByTagName("td");

  for (gridBlock of gridBlocks) {
    gridBlock.addEventListener("click", function() {
      let color = document.querySelector("input[type=color]").value;
     this.style.backgroundColor = color;
    });
  }
}


makeGrid(initialRows, initialCols);
startListener();

submit.addEventListener("click", function(e) {


  canvas.innerHTML = "";

 const inputRows = document.getElementById("inputWidth").value;
  const inputCols = document.getElementById("inputHeight").value;

  makeGrid(inputRows, inputCols);
  startListener();
});
