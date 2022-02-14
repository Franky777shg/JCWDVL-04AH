const router = require("express").Router();

const { userControllers } = require("../controllers");

const { body } = require("express-validator");

const registerValidation = [
  body("username")
    .notEmpty()
    .withMessage(`Username can't empty`)
    .isLength({ min: 6 })
    .withMessage(`Username must have 6 character`),
  body("password")
    .notEmpty()
    .withMessage(`Password can't empty`)
    .matches(/[!@#$%^&*]/)
    .withMessage(`Password must have special character`)
    .isLength({ min: 6 })
    .withMessage(`Password must have 6 character`),
  body("email").isEmail().withMessage(`Email doesn't valid`),
];

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/register", registerValidation, userControllers.register);
router.post("/login", userControllers.login);
router.post("/delete/:id", userControllers.deleteUser);

module.exports = router;
