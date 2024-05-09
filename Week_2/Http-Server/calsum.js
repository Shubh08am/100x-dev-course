const express = require("express") 

function calculateSum(n){
    let ans=0; 
    for(let i=1;i<=n;i++){
        ans+=i;
    }
return ans;
}
const app = express(); 

// '/' is the route 
app.get("/",function(req,res){
    //http://localhost:31/?n=10 -> calling by passing n value after ?
    const n = req.query.n ; //query parameter 
    const ans = calculateSum(n) 
    res.send("your answer is "+ans);
})

app.listen(31);