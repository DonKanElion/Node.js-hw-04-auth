const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findById(contactId.slice(1));
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    next(err);
  }
};

const addContact = async (req, res, next) => {
  const { email } = req.body;

  const checkContactOnEmail = await Contact.find({ email });

  if (checkContactOnEmail.length === 1) {
    return res.status(200).json({ message: "This email have in database." });
  }

  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const removeContact = async (req, res, next) => {
  try {
    const result = await Contact.findByIdAndRemove(
      req.params.contactId.slice(1)
    );

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({ message: "Contact deleted." });
  } catch (err) {
    next(err);
  }
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId.slice(1), req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
