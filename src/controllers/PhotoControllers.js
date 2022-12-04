const {Photo} = require("../models");

module.exports = {
  GetAllPhotos: async (req, res) => {
    try {
      Photo.findAll().then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  GetOnePhotoByID: async (req, res) => {
    let id = req.params.id;
    try {
      Photo.findByPk(id).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
