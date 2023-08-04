import express from "express";
import fs from 'fs';
import path from "path";

const app=express();
// express.static(path.resolve());

    // res.json({
    //     success:true,
    //     products:[],
    // });
    // Chaining Below
    // res.status(400).send("Hii hello");    const pathLocation = path.resolve();
    // res.send(pathLocation);
    // const indexHtmlPath=path.join(pathLocation,"./index.html");
    //     res.sendFile(indexHtmlPath);
    //     res.send(indexHtmlPath);
    
    // Setting up View Engine
    app.use(express.static(path.join(path.resolve(),"public")));

    

    app.set("view engine","ejs");

    app.get('',(_,res)=>{
        const user={
            name:"raj",
            age:30,
            city:"ahmedabad",
            skills:["java","python"]

        }
        res.render("profile",{user});       
    })

    app.get('/login',(_,res)=>{
        res.render("login");
    })


app.listen(5000,()=>{
    console.log('app is running on port numer 5000');
})