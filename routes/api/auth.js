const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");
const { validateBody, authenticate } = require("../../middleware");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
