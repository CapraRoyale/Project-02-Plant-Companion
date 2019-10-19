var express = require('express');
var router = express.Router();
var db = require("../db/models")

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.plant.findAll()
        .then(pl => res.render('plants', {
            plant: pl
        }));
});
router.get('/:id', function(req, res, next) {
    db.plant.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(pl => {
            console.log([pl]);
            res.render('plants', {
                plant: [pl]
            })
        });
});

module.exports = router;