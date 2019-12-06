const Product = require('../models/products')

module.exports = ({
    create: (req, res, next) => {
        Product.create({
            name: req.body.name,
            productName: req.body.productName,
            descriptions: req.body.descriptions,
            images: req.file && req.file.path
        }, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    },
    getAll: (req, res, next) => {
        Product.find({}, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    },
    deleteById: (req, res, next) => {
        Product.findByIdAndRemove(req.params.productId, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    },
    updateById: (req, res, next) => {
        Product.findByIdAndUpdate(req.params.productId, {
            name: req.body.name,
            productName: req.body.name,
            descriptions: req.body.name,
            images: req.file && req.file.path
        }, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    }
})