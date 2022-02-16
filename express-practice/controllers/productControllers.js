const { db } = require("../database");
const { generateQueryEdit } = require("../helpers/generateQuery");

module.exports = {
  getAllProducts: (req, res) => {
    let getQuery = `select * from products`;
    db.query(getQuery, (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(result);
    });
  },
  getProductById: (req, res) => {
    let id = +req.params.id;

    let getQuery = `select * from products where id = ${id}`;
    db.query(getQuery, (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(result);
    });
  },
  addProduct: (req, res) => {
    let { name, price, category } = req.body;

    let addQuery = `insert into products(name, price, category) values(${db.escape(
      name
    )}, ${db.escape(price)}, ${db.escape(category)})`;

    db.query(addQuery, (err, result) => {
      if (err) return res.status(400).send(err);

      let getQuery = `select * from products`;

      db.query(getQuery, (err2, result2) => {
        if (err2) return res.status(400).send(err2);
        res.status(200).send(result2);
      });
    });
  },
  deleteProduct: (req, res) => {
    let id = +req.params.id;

    let deleteQuery = `delete from products where id = ${id}`;

    db.query(deleteQuery, (err, result) => {
      if (err) return res.status(400).send(err);

      let getQuery = `select * from products`;

      db.query(getQuery, (err2, result2) => {
        if (err2) return res.status(400).send(err2);
        res.status(200).send(result2);
      });
    });
  },
  editProduct: (req, res) => {
    let id = +req.params.id;

    let editQuery = `update products set ${generateQueryEdit(
      req.body
    )} where id = ${id}`;

    db.query(editQuery, (err, result) => {
      if (err) return res.status(400).send(err);

      let getQuery = `select * from products`;

      db.query(getQuery, (err2, result2) => {
        if (err2) return res.status(400).send(err2);
        res.status(200).send(result2);
      });
    });
  },
};
