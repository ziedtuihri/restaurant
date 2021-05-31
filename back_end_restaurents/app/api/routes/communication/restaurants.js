const express = require('express');
const router = express.Router()
const restaurant_controller = require('../../controllers/communication/restaurants')
const restaurantAdd_controller = require('../../controllers/communication/restaurants')

router.post('/restaurants', restaurant_controller.res)
router.post('/restaurantsadd', restaurantAdd_controller.add)
module.exports = router