console.log(__filename);
console.log(__dirname);

//The below code is used to import a  particllar module  
// const fs=require('fs');


// The below code is used to import a particular function of a module
const WfSync=require('fs').writeFileSync;


WfSync("code1.txt","somecode");
