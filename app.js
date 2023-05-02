let express=require('express');
let app=express();
let port=3000;
let path=require('path');
let mongoose=require('mongoose');
let bodyparser=require('body-parser');

mongoose.connect('mongodb://localhost:27017/expressgit').then(()=>{
    console.log('connection successfull');
}).catch(()=>{
    console.log('connecion error');
});

const Schema = new mongoose.Schema({
    name: String,
    email:String,
    contact:Number,
    feedback:String
  });

  const Kitten = mongoose.model('Kitten',Schema);

//using static folder for static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());


//setting template engine pug

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get("/",(req,res)=>{
    res.render('demo.pug');
})

app.get("/about",(req,res)=>{
    res.render('t.pug');
})

app.get("/contact",(req,res)=>{
    res.render('reg.pug');
})

app.post("/contact",(req,res)=>{
    let ct=new Kitten(req.body);
    ct.save().then(()=>{
        res.send("Data saved");
    }).catch(()=>{
        res.send("error");
    })
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})