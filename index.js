import * as features from "./features.js";
import http from "http";
import fs   from "fs";
// const name=require("./features");
// const http = require("http");

console.log(http);
const home = fs.readFileSync("./index.html");
const server = http.createServer((req, res) => {

    if (req.url === "/about") {
        // res.end(`<h1>${features.randNumber()}</h1>`);

        res.end(home);

    }   
    else if (req.url === "/home") {
        res.end("<h1>Home Page</h1>");

    }
    else {
        res.end("<h1>Page Not Found </h1>");
    }

    console.log(features.name);
    console.log(features.name1);
    console.log(features.name2);
    console.log(features.randNumber());
    console.log(req.url);
    console.log("Servered");
});


server.listen(5000, () => {
    console.log("Server is working");

})
