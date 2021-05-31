const express = require('express');
const router = express.Router()
const restaurantAdd_controller = require('../../controllers/communication/restaurantAdd')
router.post('/restaurants', restaurantAdd_controller.add)
module.exports = router