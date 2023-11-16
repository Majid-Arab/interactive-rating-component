let listItems = document.querySelectorAll(".list");

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("gray");

    console.log(item.getAttribute("value"));
  });
});

let submitBtn = document.getElementById("submitBtn");
let submit = document.getElementById("submit");
let submitted = document.getElementById("submitted");

submitBtn.addEventListener("click", function (e) {
  let none = (submit.style.display = "none");
  let block = (submitted.style.display = "block");

  block;
  console.log(block);
  console.log("submitted");
});
