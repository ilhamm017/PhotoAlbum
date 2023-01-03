"use strict";
const {Model} = require("sequelize");
const {hashPAssword} = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "This username is already taken",
        },
        validate: {
          notEmpty: {
            msg: "Please enter a valid username",
          },
        },
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user, options) => {
          const hashedPassword = hashPAssword(user.password);
          user.password = hashedPassword;
        },
      },
    }
  );
  return User;
};
