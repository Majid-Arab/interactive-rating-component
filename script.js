const lis = document.querySelectorAll("li"); //select all values

// get the li tag innerHTML
function liValues(e) {
  target = e.target.innerHTML;
  console.log(target);
}

lis.forEach((el) => {
  el.addEventListener("click", liValues);
});

let submit = document.getElementById("submitBtn");
const span = (document.querySelectorAll("span").innerHTML = lis.innerHTML);

submit.addEventListener("click", function (e) {
  let submit = document.getElementById("submit");
  submit.style.display = "none";

  let submited = document.getElementById("submitted");
  submited.style.display = "block";

  span.innerHTML = target;
  console.log(span);
  return span;
});
