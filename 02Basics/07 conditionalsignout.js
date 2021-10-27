//Show user a signout button if he's authenticated
//otherwise show him option to Login/Signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show signout button!");
// } else {
//     console.log("Show login option");
// }

authenticated ? console.log("show signout") : console.log("Show singnup");