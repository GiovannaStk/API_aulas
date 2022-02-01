const express = require('express')
const routes = express.Router()
const UserController = require('./app/controllers/UserController')

routes.post("/user", UserController.store);

routes.get("/user", UserController.show);




module.exports = routes;