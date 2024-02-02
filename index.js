const express = require('express');

const app = express();

app.use((req, res, next)=>{

    console.log("this is Middleware1....!");
    next();
});

app.use((req, res, next)=>{
    console.log("Middleware2");
    res.send('<h2>Hello I am here...!</h2>')
});

app.listen(4000);