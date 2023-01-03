const {User} = require("../models");
const {verifyToken} = require("../helpers/jwt");

module.exports = {
  authentication: (req, res, next) => {
    try {
      const token = req.get("token");
      const userDecode = verifyToken(token);
      User.findOne({
        where: {
          id: userDecode.id,
          email: userDecode.email,
        },
      })
        .then((result) => {
          if (!result) {
            return res.status(401).json({
              message: "Authentication Error",
            });
          }
          res.locals.user = result;
          return next();
        })
        .catch((err) => {
          return res.status(401).json(err.message);
        });
    } catch (err) {
      return res.status(401).json(err.message);
    }
  },
};
