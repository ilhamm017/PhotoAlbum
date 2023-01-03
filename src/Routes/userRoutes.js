const {Router} = require("express");
const userController = require("../controllers/userControllers");

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
routes.post("/users", userController.register);
routes.post("/login", userController.login);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
