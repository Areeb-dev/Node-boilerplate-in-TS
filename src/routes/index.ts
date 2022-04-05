import express from 'express'
const router = express.Router()

router.use('/user', require('./auth'))

module.exports = router
