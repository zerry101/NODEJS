const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
// console.log(__dirname);
const filePath = path.join(dirPath, 'apple1.txt');
fs.writeFileSync(`${filePath}`, "this is a simple file");



fs.readFile(filePath, 'utf-8', (err, fileData) => {
    console.log(fileData);
});


fs.appendFile(filePath,"hello how are you",(err)=>{
    if(!err){
        console.log('file is updated');
    }
});


fs.readFile(filePath, 'utf-8', (err, fileData) => {
    console.log(fileData);
});

fs.rename(filePath,`${dirPath}/appleone.txt`,(err)=>{
    if(!err) {console.log("filename is updated");filePath=`${dirPath}/appleone.txt`;console.log(filePath)};
});


// fs.readFile(filePath, 'utf-8', (err, fileData) => {
//     console.log(fileData);
// });

