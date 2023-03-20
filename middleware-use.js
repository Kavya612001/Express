const express = require('express');

const app = express();


//  req => middleware => res
// middleware has access to both req and res

const logger = require('./logger');
const authorize = require('./authorize');

//app.use('/api', logger); // wherever /api is in the path, this middleware fucntion will get executed 

app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.get('/api/products', (req, res) => {
    res.send('Products')
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items')
});

app.listen(5000, () => {
    console.log('Server is listening on prot 5000');
});