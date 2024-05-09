/*
1)dumb way is to ask user to everytime send 
username and password in req headers
2) give the user back a token on signup/signin, ask the user
to send back the token in all future requests, when the user
logs out , ask the user to forget the token (or revoke it from
backend)
these tokens are generally stored in browsers local storage
but we can't store email and passwords on local storage as 
it is very public
*/


/*
Assignment
A backend having 2 end points 
POST/signin 
//pass this as input 
Body{
 username: string
 password: string 
}

return a json web token with username encrypted , we dont send back the password encrypted in JWT as JWT can be decode hence may lead to leakage of password.

GET /users
Headers-
Authorization header

returns an array of all users if user is signed in (token is correct)
returns 403 status code if not

*/

// given you have a list of in memory users

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh"
    },{
        username: "divyansh@gmail.com",
        password: '456',
        name: "divyansh pandey"
    },{
        username: "yash@gmail.com",
        password: "789",
        name: "yash pandey"
    }
];

function userExists(username,password){
    // return true or false 
    // if the user exists in the all users array

    let userExists = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && 
 ALL_USERS[i].password==password){
              userExists=true;
        }
    }
  return userExists;
}


app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        res.status(403).json({
            msg : "User doesn't exist in our memory db"
        })
        return ;
    }

    // create a jwt -> returns a token if user exist  
  // https://jwt.io/ -> token se body btadega 
    var token = jwt.sign({username : username},jwtPassword);

   // return the token 
    return res.json({
        token
    });
})

app.get('/users',function(req,res){
    const token = req.headers.authorization;
    try{
        // if token is a valid token and can be parsed using password
        // it return decoded otherwise throws an exception therefore using try catch -> so it wont go in error middleware than goes to catch if error thrown 

      //original json fields 
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;

      //return list of user other than user name using filter 
        res.status(200).json({
             users: ALL_USERS.filter(function(value){
               if(value.username==username){
                 return false;
               } else{
                 return true;
               }
             })
        });
    }

    catch(err){
        return res.status(403).json({
            msg:"invalid token"
        })
    }

})

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})


// jwt.decode(token) vs jwt.verify(token,jwtPassword)
// jwt.decode(token) doesn't need jwtPassword and returns either the json
// decoded obj or null
// jwt.verify(token,jwtPassword) needs the jwtPassword and either
// return the decoded object if verifies otherwise throws an error

/*
function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token);
    // if it's decoded then return obj otherwise returns null

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}
 */

/*
function verifyJwt(token) {
    // Your code here
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch(err){
        return false;
    }
}
*/