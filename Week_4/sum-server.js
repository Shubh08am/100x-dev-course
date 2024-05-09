//for running 
//http://localhost:8080/sum?a=1&b=20 

const express = require('express');
const app = express();

// Allow requests from http://127.0.0.1:5500 -> used it to remove cors error coming 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    next();
});

// Your route handler for sum calculation
app.get('/sum', (req, res) => {
    // Your logic for sum calculation
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
