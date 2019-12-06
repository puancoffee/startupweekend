const express = require('express')
const router = express.Router()
const totalRoute = require('../controllers/total')

router.get('/view/vote', totalRoute.getAll)
router.post('/add/vote', totalRoute.create)
router.get('/views/vote', totalRoute.getVote)

module.exports = router;