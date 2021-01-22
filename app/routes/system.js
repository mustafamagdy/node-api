const routes = require('express').Router()
const systemController = require("../controllers/system")

routes.get('/', systemController)

module.exports = routes
