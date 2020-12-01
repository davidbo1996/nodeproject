const http = require('http'); 
const dt = require('./date.js'); 
const url = require('url');
const fs = require('fs'); 
const PORT = 3000;
http.createServer((req,res) => { 
    fs.readFile('./views/index.html', function(err, data) { 
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data);
        return res.end();


    });

    

}).listen(PORT)

console.log("It's currently run on "+'http://localhost:'+ PORT);