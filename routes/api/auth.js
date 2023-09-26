const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");
const { validateBody, authenticate } = require("../../middleware");

//singup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

//singin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

//current
router.get("/current", authenticate, ctrl.getCurrent);

//logout
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
