let j = 1;

let dieArr = [];
let sum = 0;

let addDie = () => {
  let squareDiv = document.createElement("div");
  squareDiv.className = "die";
  for (let l = 0; l < dieArr.length +1; l++) {
    if (!dieArr) {
      squareDiv.id = l;
    }
    squareDiv.id = l;
  }
  // squareDiv.id = j;
  document.getElementById("dieDiv").appendChild(squareDiv);
  let squarep = document.createElement("p");
  squareDiv.appendChild(squarep);
  class Die {
    constructor() {}
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1;

      // document.createTextNode(this.value);
      squarep.innerText = this.value;
      Die.value = this.value;

      // console.log(this.value);

      // squareDiv.id = i;
    }
  }

  let i = new Die();
  i.key = j;
  i.roll();
  dieArr.push(i);
  console.log(dieArr);
  j++;
  i++;
};

document.getElementById("genBtn").addEventListener("click", addDie);
document.getElementById("rollBtn").addEventListener("click", function () {
  for (let k = 0; k < dieArr.length; k++) {
    dieArr[k].roll();
  }
  console.log(dieArr);
});

document.getElementById("sumDice").addEventListener("click", function () {
  for (let k = 0; k < dieArr.length; k++) {
    console.log(dieArr[k].value)
    sum += dieArr[k].value;
  }
  alert(`the sum is ${sum}.`);
  sum = 0;
});

document.body.addEventListener("click", function (event) {
  if (event.target.className === "die") {
    console.log(event.target.id);
    dieArr[event.target.id].roll();
  }
});

document.body.addEventListener("dblclick", function (event) {
  if (event.target.className === "die") {
    let remove = document.getElementById(event.target.id);
    remove.remove();
    dieArr.splice(dieArr.indexOf(event.target), 1);
    console.log(dieArr);
  }
});
