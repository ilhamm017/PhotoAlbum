const {comparePasswords} = require("../helpers/bcrypt");
const {User} = require("../models");
const {generateToken} = require("../helpers/jwt");

module.exports = {
  register: async (req, res) => {
    const {username, email, password} = req.body;
    User.create({
      username,
      email,
      password,
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({message: err.message});
      });
  },
  login: async (req, res) => {
    const {email, password} = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((result) => {
        if (!result) {
          throw {
            name: "User Login Error",
            devMessage: "User Login not found",
          };
        }
        const isCorrect = comparePasswords(password, result.password);
        if (!isCorrect) {
          throw {
            name: "User Login Error",
            devMessage: "User password is incorrect",
          };
        }
        let payload = {
          id: result.id,
          email: result.email,
        };
        const token = generateToken(payload);
        return res.status(200).json({token: token});
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
