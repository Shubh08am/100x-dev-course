// you need to create a in memory hospital
// get - user can check how many kidneys they have and their health
// put - user can replace all kidney, make it all healthy
// post- user can add new kidney of type given by user in req body
// delete - user can remove a unhealthy kidney

const express = require('express')
const app = express();
app.use(express.json());

// first step is to create a users array of objects
const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}]

//famous input -> query parameters
app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;
   // console.log(johnkidneys) 
   const numberofKidneys = johnkidneys.length ; 
   let numberofhealthykidneys=0; 
   for(let i=0;i<johnkidneys.length;i++){
if(johnkidneys[i].healthy){
    numberofhealthykidneys+=1;
}
   } 
   const numberofUnhealthykidneys= numberofKidneys - numberofhealthykidneys; 
  
   res.json({
    numberofKidneys,
    numberofhealthykidneys,
    numberofUnhealthykidneys
   })
})


//famous input -> body parameters 
//update numberofkidneys and similar datas 
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy ; 
    users[0].kidneys.push({
        healthy: isHealthy 
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.sendStatus(200); //validate edge cases i.e checks 
})


app.delete("/",function(req,res){
        // you return status 411 if no unhealthy kidneys
        const array=[];
        let ct=0;
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                array.push({healthy:true})
                ct++;
            }
        }
        if(ct==users[0].kidneys.length){
            res.status(411).send("no unhealty kidneys")
        }
        else{
            users[0].kidneys=array;
            res.sendStatus(200);
        }    
})

app.listen(1310) ;