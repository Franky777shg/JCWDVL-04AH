const router = require("express").Router();

const { productControllers } = require("../controllers");

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById);
router.post("/add", productControllers.addProduct);
router.delete("/delete/:id", productControllers.deleteProduct);

module.exports = router;
