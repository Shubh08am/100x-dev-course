const express = require('express');
const { format } = require('path');
const app = express();

app.use(express.json());

/*
zod is a popular input validation library , where we only need to tell the ideal
structure of ip and do not write the input validation code all by ourselves at the 
top of each route or globally too.
eg of input validation
1) validating email to be of the form  <something>@gmail.com
2) validating the password must of atleast 10 charcters in length having atleast
one uppercase , one lowercase, one special character and one digit.


we have earlier done ugly i/p validation
eg 
if(kidneyId != 1 && kidneyId != 2){
  res.sendStatus(411);
}

step 1:
npm install zod
 */

const zod = require('zod');
// we've created a schema of array of numbers 
// to validate input
const schema = zod.array(zod.number());

app.post("/health-checkup",(req,res)=>{
    // we are expecting an array kidneys in req body
    // but the user can send almost anything as ip in the req
    // it is the devlopers job to perform input validation to  make
    // sure your server does not crash 


    const kidneys = req.body.kidneys;

    // input validation using zod schema
    const response = schema.safeParse(kidneys);
    //res.send(response);

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
        return ;
    }
  /* //we can also use this to show the response 
  else{ 
  res.send({response})
  }
  */
    const kidneyLength = kidneys.length;
    res.send(`you have ${kidneyLength} kidneys`);

})

// global catches
app.use((err,req,res,next)=>{
    res.json({
        msg : "sorry something is up with our server"
    });
})

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})

