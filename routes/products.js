const express = require('express')
const router = express.Router()
const productRoute = require('../controllers/products')

router.get('/view/product', productRoute.getAll)
router.post('/add/product', productRoute.create)
router.put('/update/product/:productId', productRoute.updateById)
router.delete('/delete/product/:productId', productRoute.deleteById)

module.exports = router;