let express=require('express');
let app=express();
let port=3000;

app.get("/",(req,res)=>{
    res.send('This is home page');
})

app.get("/about",(req,res)=>{
    res.send('This is about page');
})

app.get("/contact",(req,res)=>{
    res.send('This is contact page');
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})