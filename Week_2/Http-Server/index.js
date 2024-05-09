//fs -> file system 
// public vs private API 
// AWS (mini machine jha run kr ske kuch chize / public api ) vs Firebase (server less)  
// REST API vs HTTP 



//importing library for creating http request 
//import from internet 

// step 1: run command on terminal
// npm install express


// importing express package
const express = require('express')
//this initializes the express class and return app objects on it we do .post and .get etc
const app = express()  
const port = 3000


//creating route handler 
app.get('/route-handler',function(req,res){
    //req -> request contains headers , body , query parameters 
    //res -> response
    
    res.json({
        name:"Shubham",
        Age:22
    })
})


//this ran when we enter backend  -> / is route 
//localhost:3000 
//localhost:3000/ -> both runs same thing 
app.get('/', function(req,res){
    
 //   res.send('Hello World!') 

    //sending status code 
    setTimeout(function(){
        res.status(401).send('Hello jii') 
    } , 1000)
})


//returning html
app.get('/', (req,res)=>{
    res.send('<b>hi there <b>') 
})

//it means taking over the port and call backs and we will write  a logic to create a http server 
//This line of code is using the listen method of the app object to start a server
// and make it listen for incoming HTTP requests on a specified port 
//starting http server on this port ->like calling a function after creating it 
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`) 
})


/*
app.listen(port)
*/