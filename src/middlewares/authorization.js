const {Photo} = require("../models");

module.exports = {
  authorization: (req, res, next) => {
    const photoId = req.params.id;
    const authenticationUser = res.locals.user;

    Photo.findOne({
      where: {
        id: photoId,
      },
    })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            error: "data not found",
          });
        }
        if (result.UserId === authenticationUser.id) {
          return next();
        } else {
          return res.ststus(403).json({
            error: "does not permission to access",
          });
        }
      })
      .catch((err) => {
        return res.status(500).json(err.message);
      });
  },
};
