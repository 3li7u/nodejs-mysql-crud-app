// DB Stuff
import { dbConn } from "../../config/db.config.js";

// products class
export default class Product {
  constructor(product) {
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  // class methodes
  // retrieve all products
  static findAll(result) {
    const sqlQuery = 'SELECT * FROM products';
    dbConn.query(sqlQuery, (err, res) => {
      if (err)
        result(err, null);
      else
        result(null, res);
    });
  };
  // retrieve specific product
  static findById(id, result) {
    const sqlQuery = 'SELECT * FROM products WHERE id = ?';
    dbConn.query(sqlQuery, id, (err, res) => {
      if (err)
        result(err, null);
      else if (res.length === 0)
        result(`there is no products for given id: ${id}`, null);
      else
        result(null, res[0]);
    });
  };
  // add new product
  static create(newProduct, result) {
    const sqlQuery = 'INSERT INTO products set ?';
    dbConn.query(sqlQuery, newProduct, (err, res) => {
      if (err)
        result(err, null);
      else
        result(null, res.insertId);
    });
  };
  // update product
  static update(id, product, result) {
    let subQuery = '';
    for (let key in product) {
      subQuery += `${key} = '${product[key]}',`;
    }
    subQuery = subQuery.split(',');
    subQuery.length--;
    subQuery.join(',');
    const sqlQuery = `UPDATE products SET ${subQuery} WHERE id = ?`;
    dbConn.query(sqlQuery, id, (err, res) => {
      if (err)
        result(err, null);
      else
        result(null, res);
    });
  };
  // delete product
  static delete(id, result) {
    const sqlQuery = 'DELETE FROM products WHERE id = ?';
    dbConn.query(sqlQuery, id, (err, res) => {
      if (err)
        result(err, null);
      else
        result(null, res);
    });
  };
};