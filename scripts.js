let j = 1;

let dieArr = [];
let sum = 0;

let addDie = () => {
  let squareDiv = document.createElement("div");
  squareDiv.className = "die";
  squareDiv.id = `die${j}`;
  document.getElementById("dieDiv").appendChild(squareDiv);
  let squarep = document.createElement("p");
  squareDiv.appendChild(squarep);
  class Die {
    constructor() {}
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1;

      
      let squaretext = document.createTextNode(this.value);
      squarep.innerText = this.value;
      
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
document.getElementById("rollBtn").addEventListener("click", function() {
  for (let k = 0; k < dieArr.length; k++) {
    dieArr[k].roll();
  }
});

document.getElementById("sumDice").addEventListener("click", function() {
  for (let k = 0; k < dieArr.length; k++) {
    
    sum += dieArr[k].value;
    console.log(sum);
  }
  alert(`the sum is ${sum}.`);
  sum = 0;
});
