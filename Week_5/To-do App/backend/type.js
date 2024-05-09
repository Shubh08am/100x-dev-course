// file for zod and i/p validation
const zod = require('zod');

// app.post('/todo',(req,res)=>{})
// body {title : string, description : string}
const  createTodo  = zod.object({
    title: zod.string(),
    description : zod.string()
})


// app.put('/completed',(req,res)=>{})
// body {id:string}
const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {createTodo,updateTodo}; //for exporting 