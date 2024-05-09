// we have to create backend logic for a server which is somehow connected
// to the database
// end user can send one of three requests
// /signup request 
// given a username and password we need to create a new user given a user with 
// that username doesnot already exists
// /signin 
// check if the user with username actually exists and password is correct or not
// if yes return jwt else error
// /users where we expect the user sends us the jwt and we verify the jwt and
// return the array of all users



// express and creating app and initializing midlleware
const express = require('express');
const app = express();
app.use(express.json());


// importing jwt library and initializing jwt password
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

// mongoose 
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://shubh08am:Shubham8@cluster0.ywhcg58.mongodb.net/userappnew");

/*
// create a schema , the first parameter of mongoose.model is table name
// and second is schema
const User = mongoose.model("Users",{
  name : String,
  email: String,
  password: String,
});


//creating a sign up page 
app.post("/signup", async function(req,res){
  const username = req.body.username; 
  const password = req.body.password; 
  const name =  re.body.name; 

  

  //4 things allowed -> CRUD -> CREATE , READ , UPDATE , DELETE 

  //reading here 
  //first check if user exist or not before only   
  
  //findone -> used for searching applications 
  //findone operation available on moongose  -> goes to daabase and finds the user if not found return null    
  const existingHelper = await User.findOne({username:username});
  if(existingHelper){
    return res.status(400).send("Username already exists");
    
  }
  
  //create a new user in database  
  const user = new User({ 
    name: name,
    email: username, 
    password: password ,
  });
  user.save(); //save data in database 
  //return end user 
  res.json({
    "msg": "user created successfully"
  })
})

*/


// mongoose 
//const mongoose = require('mongoose');
//mongoose.connect("mongodb+srv://pandeydivyansh1803:yashpandey162@cluster0.yzxx59c.mongodb.net/db1");

// create a schema , the first parameter of mongoose.model is table name
// and second is schema
const User = mongoose.model("Users",{
    email: String,
    password: String,
    name : String
});



// input valdiation using zod and ip schema definition for signup
const zod = require('zod');
const ip_schema = zod.object({
    email : zod.string().email(),
    password : zod.string(),
    name : zod.string()
})



// middleware for ip validation
let ip_validation_middleware = (req,res,next)=>{
    let obj = {
        email : req.body.email,
        password : req.body.password,
        name : req.body.name,
    }

    let response = ip_schema.safeParse(obj);

    if(response.success){
        next();
    }
    else{
        res.status(400).json({
            msg : "invalid ip format"
        })
    }
}



// signup a new user
app.post("/signup",ip_validation_middleware,async (req,res)=>{
    // expecting the name, email and password in body
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    // check if a user already exists
    let email_exists = await User.findOne({email:email})

    if(email_exists){
        return res.status(400).send("email already exists");
    }

    const user = new User({
        email: email,
        password: password,
        name: name
    })

    user.save();
    res.json({
        "msg": "user created successfully"
    })
})



// signin a user
app.post("/signin",ip_validation_middleware,async (req,res)=>{
    // expecting the name, email and password in body
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let valid_user = await User.findOne({
        name: name,
        email: email,
        password : password
    })

    if(!valid_user){
        return res.status(403).json({
            msg : "User doesn't exist in our db"
        })
    }

    let token = jwt.sign({name:name,email:email},jwtPassword);
    return res.json({token});
    
})



// get requrest verification using jwt and sending op
app.get("/users",async (req,res)=>{
    let token = req.headers.authorization;

    try{
        let decoded = jwt.verify(token,jwtPassword);
        let user_array = await User.find({});
        res.status(200).json({
            ALL_USERS : user_array,
        })
    }
    catch(err){
        return res.status(403).json({
            msg:"invalid token"
        })
    }
})



app.delete("/delete",async (req,res)=>{
    let token = req.headers.authorization;
    try{
        let decoded = jwt.verify(token,jwtPassword);
        await User.deleteOne({name:decoded.name,email:decoded.email});
        res.json({msg:"ok"})
    }
    catch(err){
        return res.status(403).json({
            msg:"invalid token"
        })
    }
})



// global catch
app.use((err,req,res,next)=>{
    res.status(411).json({
        msg:"internal server error"
    })
})



app.listen(3000,()=>{
    console.log(`app listening on port 3000`)
})


// const UserSchema = new mongoose.Schema({
//     email: String,
//     password: String,
//     purchasedCourses: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Course'
//     }]
// })

// const CourseSchema = new mongoose.Schema({
//     title: String,
//     price: 5999
// })

// const User = mongoose.model('User',UserSchema);
// const Course = mongoose.model('Course',CourseSchema);

// // create 
// User.create({
//     username: req.body.username,
//     password: req.body.password
// })

// // read
// User.findById("1")
// User.findOne({
//     username: "harkirat"
// })
// User.find({
//     username: "harkirat"
// })

// // update
// User.updateOne({
//     id:"1"
// },{
//     password:"newPassword"
// })

// User.updateMany({},{
//     premium:true
// })

// // delete
// User.deleteMany({})
// User.deleteOne({
//     username:"harkirat"
// })
