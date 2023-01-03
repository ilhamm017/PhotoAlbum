const jwt = require("jsonwebtoken");
const SECRET_KEY = "Rhasia";

module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign(payload, SECRET_KEY);
    return token;
  },
  verifyToken: (token) => {
    const decode = jwt.verify(token, SECRET_KEY);
    return decode;
  },
};
