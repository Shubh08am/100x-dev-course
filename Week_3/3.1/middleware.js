//bunch of pre-check using middleware 
//function -> rate limiting can be done using middlewares , calculating total request , input validations

// for running -> open postman -> get -> this is the link from repl 
//https://7905b47c-13d9-493e-a65b-ca82818317e5-00-33g8zdn8zgxaw.sisko.replit.dev:3000//health-checkup?kidneyId=2

//or use -> http://localhost:47/health-checkup?kidneyId=2

const express = require('express');
const app = express();

// What is app.use()???
// app.use(userMiddleware) ;
// this means that any route coming after this line will by 
// default have userMiddleware placed before the actual functionality

// ex:- app.use(express.json()) // returns a function 

let userMiddleware = (req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" || password != "pass"){
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }
    //correct input go to next function call 
    else{
        next();
    }
}

let kidneyMiddleware = (req,res,next)=>{
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg : "Incorrect inputs"
        })
    }
    else{
        next();
    }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    
    // all prechecks are perfomed by middlewares

    // do something with kidney here
    res.json({
        msg : "your kidney is fine !"
    })

})



app.listen(3000,()=>{
    console.log("app listening on port 3000");
})