const express = require('express');
const app = express();


//actual syntax of route -> multiple function can be passed 
app.get("/",function(req,res,next){
   console.log("alright form req1") 
  //next() makes sure to go to next function call ? how ? we call express function with next() 
  //and express makes sure to call next function like kidney , calculatesum than with req and res parameters
  next();
},
        function(req,res){
        console.log("alright form req2") 
          //no need of next here as last function which is called is this only 
        
});

app.listen(3030,()=>{
    console.log("app listening on port 3000");
})