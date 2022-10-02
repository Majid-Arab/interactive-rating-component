let submit = document.getElementById("submitBtn");
submit.addEventListener('click', function(e){
	let submit = document.getElementById("submit");
    submit.style.display = "none"
	let submited = document.getElementById("submitted");
    submited.style.display = "block"

});

// let btn = getElementsByTagName("li").value
// btn.addEventListener('onChange', function(e) {
//     console.log("SMTH" + e)
// } )

// function list(e) {
//     console.log(e.value + "THis")
// }



const lis = document.querySelectorAll("li"); // selecting all the li's
const span = document.querySelectorAll("span"); // selecting all the li's

function liValues(e){
  const target = e.target.innerHTML;
  console.log(target)
//   document.write("My"); // or innerHTML or whatever works

  console.log(span)
}  

lis.forEach((el) => {
el.addEventListener("click", liValues); // loops through all the li's and bind the function to them
});