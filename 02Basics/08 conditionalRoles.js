//create an application with following roles
//admin - gets full access
//subadmin - gets access to create/ delete course
//testprep - gets access to create/delete tests
//user - gets access to consume content

var user = "admin";

switch (user) {
    case "admin":
        return console.log("gets full access");
        break;
    case "subadmin":
        return console.log("gets access to create/ delete course");
        break;
        case "testprep":
        return console.log("gets access to create/delete tests");
        break;
        case "user":
            return console.log("gets access to consume content");
            break;
        
    default:
        console.log("TRIAL USER...");
        break;
}