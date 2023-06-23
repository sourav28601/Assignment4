// Create a simple API in node js which will return the response as text “Welcome To NodeJs Environment.

const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Node.js Environment</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});