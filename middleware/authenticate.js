const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
// const { User } = require("../models/user");


const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  //   const { authenticate = "" } = req.headers;
  const { authenticate} = req.headers;

  console.log("Hello authenticate", authenticate);

  const [bearer, token] = authenticate.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401);
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user) {
      throw HttpError(401);
    }
    
    next();
  } catch (error) {
    throw HttpError(401);
  }
};

module.exports = authenticate;
