const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    //store in user table 
    User.create({
        username, 
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
     // Implement fetching all courses logic anyone van see all courses no need to be signin 
     const response = await Course.find({});

     res.json({
         courses: response
     })
});

//using purchasedCourses as array and push courseId in it 
// which is referring to course -> no need of another table 
//for running-> post -> http://localhost:4562/user/signup
/*
body -> 
{
    "username": "harkirat@gmail.com" , 
     "password" : "123"
   
}
*/

//1 purchases -> request is post -> http://localhost:4562/user/courses/66041a6dc2a16f765291a5c0 
//where last 660.. one id is objectId of courses 
router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

//for running ->get -> http://localhost:4562/user/purchasedCourses 

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    //find all the courses id which is _id  present in purchased Courses 
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    //return all the courses purchased id
    res.json({
        courses: courses
    })
});

module.exports = router