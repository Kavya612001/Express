console.log('Express Tutorial')

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

 
const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    if(url === '/') {
         console.log(url)
        // home page
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if(url === '/styles.css') {
        // styles
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if(url === '/logo.svg') {
        // logo
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    } else if(url === '/browser-app.js') {
        // logic
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    } else {
        // resource not found
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>page not found</h1>');
        res.end();
    }
});

server.listen(5000);