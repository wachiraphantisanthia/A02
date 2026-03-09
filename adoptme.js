function validateForm(){

let name = document.getElementById("fullname").value;
let phone = document.getElementById("phone").value;
let pets = document.getElementById("pets").value;
let agree = document.getElementById("agree").checked;

if(name === "" || phone === ""){
alert("Full name and phone number cannot be empty");
return false;
}

if(pets === ""){
alert("Please enter the number of pets you currently have.");
return false;
}

if(isNaN(pets) || pets < 0 || pets > 100){
alert("Number of pets must be between 0 and 100.");
return false;
}

if(!agree){
alert("Please confirm that submitting the form does not guarantee adoption.");
return false;
}

document.getElementById("successBox").style.display = "block";

return false;


}