const express=require('express');
const app=express();
const PORT=5000;

app.get("/",(req,res)=>{

    res.send("Hello from backend!!!!");
});

app.listen(PORT,()=>{
    console.log(`App is running on the port ${PORT}.`)
});