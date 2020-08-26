function getPassword(){
// characters
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";

// default password length
var passwordLength = 16;
var password = "";
// loop
for (var i=0; i<passwordLength; i++){
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber,randomNumber+1);
}
document.getElementById("password").value = password
}