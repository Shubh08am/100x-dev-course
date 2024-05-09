// file for backend
const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb+srv://shubh08am:Shubham8@cluster0.ywhcg58.mongodb.net/todo-app")

//schema 
/*
todo{
    title: string,
    description : string,
    completed: boolean
}
 */ 


//mongoose schema created 
const todoSchema = new mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);


module.exports = {todo}