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
// console.log(graph);
for (let i = 0; i < data.length; i++) {
  console.log(`${data[i].amount}px`);
  graph[i].children[0].style.height = `${data[i].amount * 3}px`;
}
