var express = require('express');
var router = express.Router();
var db = require("../db/models")

/* GET all plant entries listing. */
router.get('/', function (req, res, next) {
    db.plant.findAll()
        .then(pl => res.render('plants', {
            plant: pl
        }));
});
// GET a single plant entry
router.get('/:id', function (req, res, next) {
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
            // console.log([pl]);
            res.render('plants', {
                plant: [pl],
                edit: true
            })
        });
});
router.post('/:id/update', function (req, res, next) {
    console.log("Request Body", req.body);
    db.plant.update(req.body, {
        where: {
            id: req.body.id
        }
    })
        .then(pl => {
            res.redirect('/plants')
        });
});

module.exports = router;