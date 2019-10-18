var express = require('express');
var router = express.Router();
var app = require("../db/models")

//GET - READ
router.get('/', function(req, res) {
    app.app.api.findAll().then((result))
    res.render(index);
});

router.get('/:id', function(req, res) {
    app.api.findByPk(req.params.id).then((result) => res.json(result));
    res.send('You are looking for ' + req.params.id);
});
//POST - CREATE
router.post('/:id', function(req, res) {

});
// PUT - UPDATE
router.put('/:id', function(req, res) {

    })
    //DELETE - DELETE
router.delete("/:id", function(req, res) {

})
module.exports = router;