const bcrypt = require("bcrypt");

module.exports = {
  hashPAssword: (userPassword) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(userPassword, salt);
    return hash;
  },
  comparePasswords: (userPassword, hashedPassword) => {
    return bcrypt.compareSync(userPassword, hashedPassword);
  },
};
