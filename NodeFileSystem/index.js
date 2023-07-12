const fs = require('fs');
const { readFile } = require('fs/promises');
const path = require('path');
const { dirname } = require('path/posix');
const dirpath = __dirname;
console.log(path.join(__dirname, "files"));
console.log(__dirname);

for (let i = 0; i < 2; i++) {
    fs.writeFileSync(`${dirpath}/apple${i}.txt`, `a simple textfile ${i}`)
}

fs.readdir(dirpath, (err, files) => {
    console.log(files);
    files.forEach((item) => {
        console.log(item);
      readFile(`${dirpath}/${item}`,'utf-8').then((data)=>{
        console.log(data);
      });   
    })
})