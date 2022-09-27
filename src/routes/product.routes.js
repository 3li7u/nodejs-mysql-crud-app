// app stuff
import express from "express";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../controllers/product.controller.js";

export const productsRouter = express.Router();


// find all products
productsRouter.get('/', findAllProducts);

// find one product
productsRouter.get('/:productId', findProductById);

// Add new product
productsRouter.post('/', createProduct);

// update product
productsRouter.put('/:productId', updateProduct);

// delete product 
productsRouter.delete('/:productId', deleteProduct);