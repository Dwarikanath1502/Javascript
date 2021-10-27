//User is only allowed to purchase when he is:
//logged in
//email verified
//cardInfo -- valid 
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged In successfully...");
//     if (isEmailVerified) {
//         console.log("Email is verified...");
//         if (cardInfo) {
//             console.log("You can make purchase");
//         }
//     }
//     }


if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("You are verified and can make purchase...");
}else{
    console.log("You are not verified! Login first");
}