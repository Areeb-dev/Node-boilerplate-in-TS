const express = require('express')
const router = express.Router()

router.use('/user', require('./auth'))

module.exports = router