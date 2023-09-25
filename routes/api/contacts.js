const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { HttpError } = require("../../helpers");
const { isValidId, validateBody, authenticate } = require("../../middleware");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
