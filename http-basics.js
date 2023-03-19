console.log('Express Tutorial')

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./index.html');

 
const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    if(url === '/') {
        // home page
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if(url === '/about') {
        // about page
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>about page</h1>');
    } else {
        // resource not found
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>page not found</h1>');
    }
});

server.listen(5000);