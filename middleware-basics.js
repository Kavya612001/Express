const express = require('express');

const app = express();

//  req => middleware => res
// middleware has access to both req and res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Home')
});

app.get('/about', logger, (req, res) => {
    res.send('About')
});

app.listen(5000, () => {
    console.log('Server is listening on prot 5000');
});