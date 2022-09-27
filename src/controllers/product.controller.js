// request stuff
import Product from '../models/product.model.js';


export const findAllProducts = (req, res) => {
  Product.findAll((err, products) => {
    if (err)
      res.send({ error: err });
    else
      res.status(200).json({ error: err, message: 'all products retrieved successfully!', data: products });
  });
};

export const findProductById = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId, (err, product) => {
    if (err)
      res.status(400).json({ error: err });
    else
      res.status(200).json({ error: false, message: 'product retrieved successfully!', data: product });
  });
};

export const createProduct = (req, res) => {
  const newProduct = new Product(req.body);
  Product.create(newProduct, (err, productId) => {
    if (err)
      res.send({ error: err });
    else
      res.status(201).json({ error: err, message: 'new product added successfully!', data: productId });
  });
};

export const updateProduct = (req, res) => {
  const { productId } = req.params;
  Product.update(productId, req.body, (err, product) => {
    if (err)
      res.send({ error: err });
    else
      res.status(201).json({ error: err, message: 'product updated successfully!', data: product });
  });
};

export const deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.delete(productId, (err, product) => {
    if (err)
      res.send({ error: err });
    else
      res.status(201).json({ error: err, message: 'product deleted successfully!', data: product });
  });
};