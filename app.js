const express=require("express")
const path=require('path');
const app=express();
const port=80;
// for serving static files
app.use('/static' , express.static('static'))
 require("./routes/idea.routes")(app);
 app.use(express.json());
// set template engine for pug
app.set('view engine', 'pug')
// set the view directory
app.set('views', path.join(__dirname,'views'))
app.get('/demo',(req , res)=>{
    res.status(200).render('demo')
})
app.listen(port,()=>{
 console.log(`the app started success on port $(port)`)
})