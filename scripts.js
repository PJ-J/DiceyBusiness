let j = 1;

let dieArr = [];
let sum = 0;

let addDie = () => {
  let squareDiv = document.createElement("div");
  squareDiv.className = "die";
  squareDiv.addEventListener("click", (e) => {
    console.log(e.target.id)
    // dieArr[e.target.id].roll();
    console.log(dieArr[e.target.id])
  })
  for (let l = 0; l < dieArr.length + 1; l++) {
    if (!dieArr) {
      squareDiv.id = l;
    }
    squareDiv.id = l;
  }

  document.getElementById("dieDiv").appendChild(squareDiv);
  let squarep = document.createElement("p");
  squareDiv.appendChild(squarep);
  class Die {
    constructor() {}
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1;

      switch (this.value) {
        case 1:
          squarep.innerHTML = "&#9856";
          Die.value = this.value;
          break;
        case 2:
          squarep.innerHTML = "&#9857";
          Die.value = this.value;
          break;
        case 3:
          squarep.innerHTML = "&#9858";
          Die.value = this.value;
          break;
        case 4:
          squarep.innerHTML = "&#9859";
          Die.value = this.value;
          break;
        case 5:
          squarep.innerHTML = "&#9860";
          Die.value = this.value;
          break;
        case 6:
          squarep.innerHTML = "&#9861";
          Die.value = this.value;
          break;
        default:
      }
    }
  }

  let d1 = new Die();
  d1.key = j;
  d1.roll();
  dieArr.push(d1);
  console.log(dieArr);
  j++;
};

document.getElementById("genBtn").addEventListener("click", addDie);
document.getElementById("rollBtn").addEventListener("click", function () {
  dieArr.forEach((die) => {
    die.roll();
  });
});

document.getElementById("sumDice").addEventListener("click", function () {
  dieArr.forEach((die) => {
    console.log(die.value);
    sum += die.value;
  });

  alert(`the sum is ${sum}.`);
  sum = 0;
});



document.body.addEventListener("dblclick", function (event) {
  if (event.target.className === "die") {
    let remove = document.getElementById(event.target.id);
    remove.remove();
    dieArr.splice(dieArr.indexOf(event.target), 1);
    console.log(dieArr);
  }
});
