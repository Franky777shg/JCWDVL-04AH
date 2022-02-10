const router = require("express").Router();

const { userControllers } = require("../controllers");

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.post("/delete/:id", userControllers.deleteUser);

module.exports = router;
