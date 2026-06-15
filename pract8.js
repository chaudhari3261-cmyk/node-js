const http = require('http');
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('jcd.html',function(err,data){
        if(err){
            res.writeHead(404,{ 'content-type': 'text/plain' });
            res.write('file does not found');
            return res.end();
        }
   
           res.writeHead(200,{'content-type':'text/html'});
           res.write(data);
           res.end();
   
    });


}).listen(3000);
console.log("server running at http://localhost:3000");