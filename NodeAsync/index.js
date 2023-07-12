console.log("first here");
console.log("second here");
setTimeout(() => {
    console.log("after 2 seconds here");
}, 2000);

setTimeout(()=>{
    console.log("after 0 seconds here");
},0);

console.log("3rd here");