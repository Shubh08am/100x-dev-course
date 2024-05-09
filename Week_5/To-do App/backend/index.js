const express = require('express');
const { createTodo, updateTodo } = require('./type'); //object destructuring i.e importing 
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


// postman -> http://localhost:3068/todo -> post request -> body send title and description -> added to monogodb
app.post("/todo" , async function(req,res){
    const createPayload = req.body ; 
    const parsePayLoad = createTodo.safeParse(createPayload) ; 

    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb 
    await todo.create({
        title: createPayload.title, 
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})


app.get("/todos" , async function(req,res){
    const todos = await todo.find({}) ; // it returns a promise 
    res.json({
        todos
    })
}) 

app.put("/completed" , async function(req,res){
    const updatePayload = req.body ; 
    const parsePayLoad = updateTodo.safeParse(updatePayload) ; 

    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
    await todo.updateMany({
        _id: req.body.id //unique _id assign in mongo using it update 
    },
        {
            completed: true
        }) 

    res.json({
        msg: "Todo marked as Completed"
    })
})


// global catch 
app.use((err,req,res,next)=>{
    res.status(500).send("internal server error");
})


app.listen(3068,()=>{
    console.log('app listening on port 3000');
})
