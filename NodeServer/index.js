const http=require('http');

function dataControl(req,res){
    res.write("hello srgdgfggfgf");
    res.send("HELLO");
    res.end("Hiii");

};

http.createServer(dataControl).listen(5000,()=>{
      console.log('listening on 5000 port');
})