let products = [
  {
    id: 1,
    name: "banana",
    price: 2000,
  },
  {
    id: 2,
    name: "orange",
    price: 3000,
  },
  {
    id: 59,
    name: "melon",
    price: 4000,
  },
];

module.exports = {
  getAllProducts: (req, res) => {
    try {
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getProductById: (req, res) => {
    try {
      let id = +req.params.id;
      let result = products.filter((item) => item.id === id);
      res.status(200).send(result[0]);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  addProduct: (req, res) => {
    try {
      req.body.id = products[products.length - 1].id + 1;
      products.push(req.body);
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  deleteProduct: (req, res) => {
    try {
      let id = +req.params.id;
      let index = products.findIndex((item) => item.id === id);
      products.splice(index, 1);
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
