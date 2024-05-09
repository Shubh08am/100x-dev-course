

// importing express package -> to create http server 
const express = require('express')
//this initializes the express class and return app objects on it we do .post and .get etc
const app = express()  
const port = 30

//middle wares 
const bodyParser = require('body-parser')
app.use(bodyParser.json());


//returning html
app.post('/', (req,res)=>{
  //undefined 
    console.log(req.body)  
    res.send("yo yo")

     // query parameters -> sending request (data)
     console.log(req.query.message);

     // this gives undefined with the req.body
     // to handle this at the top write
     // app.use(express.json())
     // we can also use body-parser for the same
     // npm install body-parser
     // const bodyParser = require('body-parser')
     // app.use(bodyParser.json())
     
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`) 
})

