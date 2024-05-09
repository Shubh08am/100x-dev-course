
/*
run -> postman -> post -> 
https://7905b47c-13d9-493e-a65b-ca82818317e5-00-33g8zdn8zgxaw.sisko.replit.dev:3000/health-checkup 

in body -> json -> 
{
   "kidneys" : [1,2]
}

output-> you have 2 kidneys 
*/

const express = require('express');
const app = express();
app.use(express.json());



app.post("/health-checkup",(req,res)=>{
   // "kidneys" : [1,2]
  const kidneys = req.body.kidneys; 
  if(!kidneys){
    res.json({
      msg: "wrong inputs"
    })
  }
  else{
    const kidneyLength = kidneys.length ; 
    res.send("you have " + kidneyLength + "kidneys")
  }
})



app.listen(3000,()=>{
    console.log("app listening on port 3000");
})