const express = require("express");
const routes = express.Router();
const publicController = require("../controller/public");

routes.get("/", publicController.startApi);

module.exports = routes;
