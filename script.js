// const lis = document.querySelectorAll("li"); //select all values

// // get the li tag innerHTML
// function liValues(e) {
//   target = e.target.innerHTML;
//   console.log(target);
// }

// lis.forEach((el) => {
//   el.addEventListener("click", liValues);
// });

// let submit = document.getElementById("submitBtn");
// const span = (document.querySelectorAll("span").innerHTML = lis.innerHTML);

// submit.addEventListener("click", function (e) {
//   let submit = document.getElementById("submit");
//   submit.style.display = "none";

//   let submited = document.getElementById("submitted");
//   submited.style.display = "block";

//   span.innerHTML = target;
//   console.log(span);
//   return span;
// });

// From Discord

const lis = document.querySelectorAll("li");
const starHolder = document.querySelector(".rated > span"); // that
let rates = 0; // added that

function liValues(e) {
  target = e.target.innerHTML;
  rates = target; // that

  const span = document.getElementsByTagName("span");
  console.log(span);
}

console.log(liValues);

lis.forEach((el) => {
  el.addEventListener("click", liValues);
});

let submit = document.getElementById("submitBtn");
let btn = document.getElementsByClassName("btn");
const span = (document.getElementsByTagName("span").innerHTML = lis.innerHTML);

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "hsl(25, 97%, 53%)";
});

submit.addEventListener("click", function (e) {
  let submit = document.getElementById("submit");
  submit.style.display = "none";

  let submited = document.getElementById("submitted");
  starHolder.innerHTML = rates; // AND THAT
  submited.style.display = "block";
});
