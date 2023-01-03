const {Photo} = require("../models");

module.exports = {
  createPhoto: async (req, res) => {
    const {title, caption, image_url} = req.body;
    const user = res.locals.user;
    Photo.create({
      title,
      caption,
      image_url,
      // UserId: user.id,
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  },
  readAllPhoto: async (req, res) => {
    Photo.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  },
  readOnePhotoId: async (req, res) => {
    const photoId = req.param("id");
    Photo.findOne({
      where: {
        id: photoId,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  },
  updatePhoto: async (req, res) => {
    const photoId = req.param("id");
    Photo.update(req.body, {
      where: {
        id: photoId,
      },
    });
    await Photo.findOne({
      where: {
        id: photoId,
      },
    }).then((result) => {
      res.json(result);
    });
  },

  deletePhoto: async (req, res) => {
    const photoId = req.param("id");
    Photo.destroy({
      where: {
        id: photoId,
      },
    })
      .then((result) => {
        res.status(200).json("sukses");
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  },
};
