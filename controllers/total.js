const Vote = require('../models/total')
module.exports = ({
    create: (req, res, next) => {
        console.log(req.body);
        Vote.create({
            name: req.body.name,
            productName: req.body.productName
        }, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    },
    getAll: (req, res, next) => {
        Vote.find({}, (err, result) => {
            if (err) 
                next(err)
            else {
                res.json(result)
            }
        })
    },
    getVote: (req, res, next) => {
        Vote.find({}).populate(['productName']).populate({
            path: 'products',
            populate: {
                path: 'product',
                populate: {
                    path: 'total',
                }
            }
        }).then(detail => {
            res.json(detail)
        })
        .catch(error => {
            res.json(error)
        })
    }
})