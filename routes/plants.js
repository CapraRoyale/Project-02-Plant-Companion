var express = require('express');
var router = express.Router();
var db = require("../db/models")

/* GET all plant entries listing. */
router.get('/', function(req, res, next) {
    db.plant.findAll()
        .then(pl => res.render('plants', {
            plant: pl
        }));
});
// GET a single plant entry
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
// GET a single plant entry to edit
router.get('/:id/edit', function (req, res, next) {
    db.plant.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(pl => {
            console.log([pl]);
            res.render('plants', {
                plant: [pl],
                edit: true
            })
        });
});

module.exports = router;