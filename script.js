let submit = document.getElementById("submitBtn");
submit.addEventListener('click', function(e){
	let submit = document.getElementById("submit");
    submit.style.display = "none"
	let submited = document.getElementById("submitted");
    submited.style.display = "block"

});

let btn = document.querySelector(".starBtn").value
btn.addEventListener('click', function(e) {
    console.log("SMTH" + e)
} )