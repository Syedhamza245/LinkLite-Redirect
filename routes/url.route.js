const express = require('express')
const router = express.Router()
const {handleGenerateShortUrl, handleAnalytics} = require('../controllers/url.controller')


router.post('/',handleGenerateShortUrl )
router.get('/analytics/:id', handleAnalytics)

module.exports = router;