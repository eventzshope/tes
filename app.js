const express=require('express');
const app=express();
const sequelize=require("./db/sequelize")
sequelize.initDb()
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(5000);