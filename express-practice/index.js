const express = require("express");
const cors = require("cors");
const PORT = 2000;

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to my API</h1>");
});

const { productRouters, userRouters } = require("./routers");
server.use("/product", productRouters);
server.use("/user", userRouters);

server.listen(PORT, () => console.log(`Running at PORT : ${PORT}`));
