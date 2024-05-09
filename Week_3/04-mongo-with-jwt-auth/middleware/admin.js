const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config"); //global secret for signing the token and verifying token 

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization; // bearer token 
    //token first has bearer and than token -> we need token 
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token

    //verify the token -> not hitting the database
    //jwt save the one db call 
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
    
}

module.exports = adminMiddleware;