let j = 1;

let dieArr = [];

let addDie = () => {
  let squareDiv = document.createElement("div");
  squareDiv.className = "die";
  squareDiv.id = `die${j}`;
  document.getElementById("dieDiv").appendChild(squareDiv);
  let squarep = document.createElement("p");
  class Die {
    constructor() {}
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1;

      
      let squaretext = document.createTextNode(this.value);
      squarep.appendChild(squaretext);
      squareDiv.appendChild(squarep);
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
document.getElementById("rollBtn").addEventListener("click", addDie);
