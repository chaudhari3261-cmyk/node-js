 const http = require("http");
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type":"text/plain"});
    res.end("hello massage displayed using Node,js Servre");
});
server.listen(4100,() =>{
    console.log("server running at http://localhost:4100");
});

