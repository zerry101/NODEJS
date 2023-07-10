const http=require('http');

function dataControl(req,res){
    res.write("hello srgdgfggfgf");
    res.end("");
     
};

http.createServer(dataControl).listen(5000,()=>{
      console.log('listening on 5000 port');
})