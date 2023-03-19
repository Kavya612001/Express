const express = require('express');
const {products} = require('./data');

const app = express();

app.get('/', (req, res) => {
    // res.json([{name: 'Kavya'}, {dad: 'Sampath Kumar'}, {mom: 'Premalatha'}]);
    res.json(products);
});

app.listen(5000, () => {
    console.log('Server is listening at port 5000');
});