const {Router} = require("express");
const photoControllers = require("../controllers/photoControllers");
const photoController = require("../controllers/photoControllers");
// const {authentication} = require("../middlewares/authentication");
// const {authorization} = require("../middlewares/authorization");
// // import all controllers
// import photoController from './app/controllers/photoController';

const routes = new Router();

// Add routes
// routes.use(authentication);
routes.post("/create", photoControllers.createPhoto);
routes.get("/photos", photoController.readAllPhoto);
routes.get("/photos/:id", photoController.readOnePhotoId);
// routes.use("/photos:id", authorization);
routes.put("/photos/:id", photoController.updatePhoto);
routes.delete("/photos/:id", photoController.deletePhoto);

module.exports = routes;
