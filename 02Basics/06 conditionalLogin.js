//Allow user to acces if he is:
//logged in from Email
//logged in from Google
//logged in from Facebook

var email = false;
var facebook = true;
var google = false;

if (email || facebook || google) {
    console.log("Login Success!");
}else{
    console.log("You are not Logged In...");
}