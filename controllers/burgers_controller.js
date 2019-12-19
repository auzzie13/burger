const express = require('express');
const burger = require('../models/burger.js');


const router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log('ALL THE BURGERS: ' + hbsObject.burgers);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body);
    burger.insertOne(
        ['burger_name','devour'], 
        [req.body.burger_name, req.body.devour], 
        function(result) {
         res.json({ id: result.insertId });
        }
    );
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition: ', condition);

    burger.updateOne(condition, function(result) {
        console.log(result);
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', function(req, res) {
    console.log('hello');
    var condition = 'id= ' + req.params.id;

    burger.delete(condition, function(result) {
            res.status(200).end();
    });
});

module.exports = router;