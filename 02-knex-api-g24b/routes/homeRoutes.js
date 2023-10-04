const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, entonces se ejecuta el controlador homeController.createHome

router.post('/homes', homeController.createHome)

module.exports = router
