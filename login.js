var usernameValid = "kdluhy@sjci.com";
var passwordValid = "password123";

function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == usernameValid && password == passwordValid){
    alert("Correct");
  }
}
