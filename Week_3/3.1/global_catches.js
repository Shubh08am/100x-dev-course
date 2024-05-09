
/*
run -> postman -> post -> 
https://7905b47c-13d9-493e-a65b-ca82818317e5-00-33g8zdn8zgxaw.sisko.replit.dev:3000/health-checkup 

in body -> json -> 
{
   "kidneys" : ab
}

ouptut -> 
{
    "msg": "sorry something is up with your server"
}

*/

const express = require('express');
const app = express();
app.use(express.json());



app.post("/health-checkup",(req,res)=>{
     // we are expecting an array kidneys in req body
    // but the user can send almost anything as ip in the req
    // it is the devlopers job to perform input validation to  make
    // sure your server does not crash 
    // also with wrong ip user can break into your server
    // now we can manually use multiple if checks for input validation 
    // but the better way to do that is using zod library

   // "kidneys" : [1,2]
  const kidneys = req.body.kidneys; 
  const kidneyLength = kidneys.length ; 
  res.send("you have " + kidneyLength + "kidneys")
  
})

//GLOBAL CATCHES
//if exception occurs than only this down one called 
// express recognizes it as error handling middlewares 
// because it has 4 arguments
// it is middleware which is always addedd at the end 
// after all routes
// this takes 4 parameters, err, req,res,next
// whenever there is any exception in any of the routes 
// the exception instead of getting displayed and reaching the 
// end user via frontend gets caught by the global catch
// then appropriate handling of err is done
// global catches prevent errors from propogating to end user


app.use(function(err,req,res,next){ 
  //from here we can keep track of exception/error
  //errorCount++;
  res.json({
    msg: "sorry something is up with your server"
  })
})

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})