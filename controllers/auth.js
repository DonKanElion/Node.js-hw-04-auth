const { User } = require("../models/user");

const { HttpError } = require("../helpers");

const register = async (req, res) => {
  console.log("Req.body: ", req.body);
  const newUser = await User.create(req.body);

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = { register };
