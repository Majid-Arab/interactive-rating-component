let listItems = document.querySelectorAll(".list");
let submittedContainer = document.getElementById("submitted");
let selectedValueSpan = submittedContainer.querySelector(".rated span");

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    listItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("gray");
      }
    });
    item.classList.toggle("gray");

    let selectedValue = item.getAttribute("value");
    selectedValueSpan.textContent = selectedValue;
    console.log(item.getAttribute("value"));
  });
});

let submitBtn = document.getElementById("submitBtn");
let submit = document.getElementById("submit");
let submitted = document.getElementById("submitted");

submitBtn.addEventListener("click", function (e) {
  submit.style.display = "none";
  let block = (submitted.style.display = "flex", submitted.style.alignItems = "center", submitted.style.gap = "15px")
});
