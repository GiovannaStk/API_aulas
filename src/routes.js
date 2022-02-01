const express = require('express');
const LoginController = require('./app/controllers/LoginController');
const routes = express.Router();
const UserController = require('./app/controllers/UserController');

const AuthMidleware = require('./app/Midlewares/AuthMidlewares');

routes.post("/user", UserController.store);

routes.get("/user", AuthMidleware, UserController.show);

routes.post("/login", LoginController.index);




module.exports = routes;