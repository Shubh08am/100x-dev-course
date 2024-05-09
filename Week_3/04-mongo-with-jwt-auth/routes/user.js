const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

//for runnign -> post -> http://localhost:4563/user/courses/6604326a07ac34411426f93a 
//where 660.. is the objectId of the purchased Course 
//this returns username => harkirat@gmail.com
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router