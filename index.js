import {name,name1,name2} from "./features.js";
import  http from "http";
// const name=require("./features");
// const http = require("http");

console.log(http);


const server = http.createServer((req, res) => {
    
    if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    }
    else if (req.url === "/home") { 
        res.end("<h1>Home Page</h1>");
    }
    else {
        res.end("<h1>Page Not Found </h1>");
    }
    
    console.log(name);
    console.log(name1);
    console.log(name2);
    console.log(req.url);
    console.log("Servered");
});


server.listen(5000, () => {
    console.log("Server is working");

})
