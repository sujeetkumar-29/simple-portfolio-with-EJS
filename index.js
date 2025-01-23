const express=require("express");
const app=express();
const path=require("path");
const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.render("home.ejs");

});
app.get("/home",(req,res)=>{
    // res.send("Home Page");
    res.render("home.ejs");
});
app.get("/skill",(req,res)=>{
    res.render("skill.ejs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
   
});
app.get("/project",(req,res)=>{
    res.render("project.ejs");
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});