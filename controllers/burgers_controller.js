var express = require('express');

// Import model
var burger = require('../models/burger');

// ROUTER
var router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(req.body.newBurger, function() {
        res.redirect('/index');
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});

// Export routes
module.exports = router;