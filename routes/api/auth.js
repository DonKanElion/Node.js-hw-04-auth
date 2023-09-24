const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");
const { isValidId, validateBody } = require("../../middleware");

//singup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

//singin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
