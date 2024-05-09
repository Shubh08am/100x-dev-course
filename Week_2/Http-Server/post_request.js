

// importing express package
const express = require('express')
//this initializes the express class and return app objects on it we do .post and .get etc
const app = express()  
const port = 3


//returning html
app.post('/post-handler', (req,res)=>{
  //  console.log(req.headers) 

  //undefined 
    console.log(req.body)  
    res.send({
        msg: "2+2=4"
    }) 
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`) 
})
