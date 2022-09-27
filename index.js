import express from "express";
import bodyParser from 'body-parser';
import { productsRouter } from "./src/routes/product.routes.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// product routes
app.use('/api/products', productsRouter)

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));