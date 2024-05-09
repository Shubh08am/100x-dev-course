const { User } = require("../db") ;  //sccess the db/index 

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username; 
    const password = req.headers.password;
    //check if the users exist 
    User.findOne({
        username: username, //find the username and password of rhs in our schema 
        password: password
    })
    .then(function(value){
        //if value does exist we found a user 
        if(value){
            next();
        } 
        else{
            //no user with the specified password 
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;