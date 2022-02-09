let i = 1;

let addSquareDiv = () => {
  let squareDiv = document.createElement("div");
  squareDiv.className = "die";
  document.getElementById("dieDiv").appendChild(squareDiv);
  squareDiv.id = i;
  let squarep = document.createElement("p");
  let squaretext = document.createTextNode(i);
  squarep.appendChild(squaretext);
  squareDiv.appendChild(squarep);
  i++;
};

document.getElementById("btn").addEventListener("click", addSquareDiv);

class Die {
  constructor() {
    }
    roll() {

    }
}