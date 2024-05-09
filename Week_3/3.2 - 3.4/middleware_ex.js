
// express and creating app and initializing midlleware
const express = require('express');
const app = express();
app.use(express.json());

//fuction return true if age of the pereson is > 14 
function isEligible(age){
  if(age >= 14) return true;
  else return false;
}

//using middle wares 
function isEligibleMiddleware(req, res, next){ 
  const age = req.query.age; 
  if(age>=14){
    next();
  }else{
    res.json({
      "msg" : "You are not eligible to ride the ride"
    })
  }
}

//with out middle wares 
/*
app.get("/ride1",function(req,res){ 
  //to run -> https://a115ab79-cf3d-41b0-858c-18ec524cc342-00-2w2r89lws9bcq.sisko.replit.dev/ride1?age=14 
  if(isEligible(req.query.age)){
    res.json({
      "msg" : "You have successfully riden the ride 1"
    })
  } else{
    res.status(411).json({
      "msg" : "You are not eligible to ride the ride 1"
    })
  }
})

//ride 2 
app.get("/ride2",function(req,res){ 
  //to run ->https://a115ab79-cf3d-41b0-858c-18ec524cc342-00-2w2r89lws9bcq.sisko.replit.dev/ride2?age=15 
  
  if(isEligible(req.query.age)){
    res.json({
      "msg" : "You have successfully riden the ride 2"
    })
  } else{
    res.status(411).json({
      "msg" : "You are not eligible to ride the ride 2"
    })
  }
})
*/

//with  middle wares 
//order matter of below line -> it applies to code written below it only 
//app.use(isEligibleMiddleware) ; //or directly use here only 

app.get("/ride1",isEligibleMiddleware,function(req,res){ 
      res.json({
      "msg" : "You have successfully riden the ride 1"
    });
});

//ride 2 
app.get("/ride2",isEligibleMiddleware,function(req,res){ 
      res.json({
      "msg" : "You have successfully riden the ride 2"
    });
});


app.listen(3000);



