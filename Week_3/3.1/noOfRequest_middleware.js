const express = require('express');
const app = express();


let noOfRequest=0 ; 
function calcRequest(req,res,next){
  noOfRequest++;
  console.log(noOfRequest);
  next();
}

 app.get("/",calcRequest,function(req,res){
   
 }) ;

/*
//Another way of using after line 18 every function will have calcRequest as a middleware and
//we don't need to write again and again 

app.use(calcRequest);

 app.get("/",function(req,res){
   
 }) ;
*/

app.listen(89);