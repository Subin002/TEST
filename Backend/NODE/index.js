const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 1500;

app.use(express.json());


const productSchema = new mongoose.Schema({
    product: String,
    id: Number,
});

const productModel=mongoose.model('Product', productSchema);


app.post('/post',async(req, res) => {
    try {
        const {product, id} = req.body;
        const newProduct = await productModel.create({ product, id });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});


app.get('/get',async(req, res)=> {
    try {
        const { product, id } = req.query; 
        const existingProducts = await productModel.find({ product, id });
        res.json(existingProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
});


app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(204).send(); 
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
