//JWT 
// DECODE VS VERIFY -> DIFFERENCE IMP 
/*
VERIFY DONE ONLY BY BACKEND SERVER WHICH HAS ENCODED IT USING SECRET KEY
DECODING CAN BE DONE BY ANY ONE 
*/

const jwt = require('jsonwebtoken'); 


//decode , verify , generate 

const value = {
  name: "harkirat", 
  accountNumber: 12312312
} 

//creating jwt token of value 
const token = jwt.sign(value,"secret") ; 
//this token has been generated using secret and 
//hence can be verified using this secret only 
console.log(token); //encoded it 

//now,we can decode the encoded messsage with-out secret 


