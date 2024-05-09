const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// for running -> postman -> post -> http://localhost:4562/admin/signup 
/*
body -> 
{
    "username": "harkirat@gmail.com" , 
     "password" : "123",
}
*/
// create a db name -> course_selling_app in mongo db compass 

// Admin Routes -> it handles /admin/signup request --> /admin written in main index.js file 
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if the user with this username already exist 
    //if so don't signup 
    await Admin.create({
        username: username,
        password: password
    })
    //we can use .then to wait and resolve or directly write as well 
    res.json({
        message: 'Admin created successfully'
    })
    
});

//for running -> http://localhost:4562/admin/courses 
/*
body -> 
{
    "title": "full stack course" , 
     "description" : "100x devs course",
     "imageLink": "https://google.com/cat.png",
     "price": 5999
}
and add header for username and password 
*/

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod for input validation 
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

//return user all the courses  
//for running -> http://localhost:4562/admin/courses do get request 
//with right header of password and username 
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;