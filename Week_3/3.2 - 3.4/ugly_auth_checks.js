const express = require('express');
const app = express();

app.get("/health-checkup",(req,res)=>{
    // do route checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "harkirat" || password != "pass"){
        res.status(403).json({
            msg : "user doesn't exist"
        });
        return ;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg : "wrong inputs"
        })

        return ;
    }

    // do something with kidney here
    res.json({
        msg : "your kidney is fine !"
    })

})


// what if we need to introduce another route that does
// kidney replacement , inputs needs to be the same
// now the authentication code will be repeated in the
// new route too , which violates dry principle

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})