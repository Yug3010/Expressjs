let express=require('express');
let app=express();
let port=3000;
let path=require('path');

//using static folder for static files
app.use('/static',express.static('static'));



//setting template engine pug

app.set('view engine','pug');
app.set('views',path.join('views'));


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