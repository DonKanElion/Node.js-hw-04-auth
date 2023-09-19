const express = require("express");
const router = express.Router();

const { schemas } = require("../../models/user");
const { HttpError } = require("../../helpers");
const { isValidId, validateBody } = require("../../middleware");


const { register } = require("../../controllers/auth");

// const {}

router.post("/register", validateBody(schemas.registerSchema), register);

module.exports = router;
