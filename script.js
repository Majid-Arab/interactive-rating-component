// let listItems = document.querySelectorAll(".list");

// listItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     listItems.forEach(function (otherItem) {
//       if (otherItem !== item) {
//         otherItem.classList.remove("gray");
//       }
//     });
//     item.classList.toggle("gray");

//     console.log(item.getAttribute("value"));
//   });
// });

// let submitBtn = document.getElementById("submitBtn");
// let submit = document.getElementById("submit");
// let submitted = document.getElementById("submitted");

// submitBtn.addEventListener("click", function (e) {
//   let none = (submit.style.display = "none");
//   let block = (submitted.style.display = "block");

//   block;
//   console.log(block);
//   console.log("submitted");
// });

var listItems = document.querySelectorAll(".list");
var submittedContainer = document.getElementById("submitted");
var selectedValueSpan = submittedContainer.querySelector(".rated span");

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove the 'gray' class from all other list items
    listItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("gray");
      }
    });

    // Toggle the 'gray' class for the clicked item
    item.classList.toggle("gray");

    // Update the selected value in the submitted container
    var selectedValue = item.getAttribute("value");
    selectedValueSpan.textContent = selectedValue;

    // Show the submitted container
    submittedContainer.style.display = "block";

    // Log the value to the console
    console.log(selectedValue);
  });
});
