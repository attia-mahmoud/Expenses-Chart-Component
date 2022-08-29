const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const graph = document.querySelector(".graph").children;

for (let i = 0; i < data.length; i++) {
  increaseHeightRecursive(0, data[i].amount, graph[i].children[1])
  graph[i].children[0].innerHTML = data[i].amount;
}

const numberSpeed = 0.1;
const heightSpeed = 25;

function increaseHeightRecursive(i, endHeight, element) {
  if (i < endHeight) {
    element.style.height = `${i * 3}px`;
    setTimeout(function() {
      increaseHeightRecursive(i + 1, endHeight, element)
    }, heightSpeed)
  }
}


/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function increaseElementNumber(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  increaseNumberRecursive(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function increaseNumberRecursive(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      increaseNumberRecursive(i + 1, endNbr, elt);
    }, numberSpeed);
  }
}

/*Function called on button click*/
increaseElementNumber("balance"); 
increaseElementNumber("balance-decimal"); 
increaseElementNumber("total"); 