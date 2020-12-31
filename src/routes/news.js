const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

// newsController.index

// Must top
router.use('/:slug', newsController.show)
// Must bottom
router.use('/', newsController.index)

module.exports = router