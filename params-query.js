const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
    // console.log(req.params);
    const singleProduct = products.find((product) => product.id === +req.params.productId);
    if(!singleProduct) {
        return res.status(404).send('Product does not exist');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('hello');
});

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0,limit);
    }
    if(sortedProducts.length === 0) {
        // res.status(200).send('No such products found');
        return res.status(200).json({success: true, data: []});
    }
    return res.status(200).send(sortedProducts);
});


app.listen(5000, () => {
    console.log('app is listening on port 5000');
});