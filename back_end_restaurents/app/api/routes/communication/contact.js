const express = require('express');
const router = express.Router()
const contact_controler = require('../../controllers/communication/contact')
router.post('/contact', contact_controler.add)

module.exports = router