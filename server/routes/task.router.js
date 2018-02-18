var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        var queryText = 'SELECT * FROM "tasks";'
        db.query(queryText, function (errorMakingQuery, result) {
            done();
            if (errorMakingQuery) {
                console.log('error making query', errorMakingQuery);
                res.sendStatus(500);
            } else {
                res.send(result.rows);
            }
        });
    }); //end of pool
}); //end of get

router.post('/', function (req, res) {
    var newTask = req.body.taskName;
    pool.connect(function (err, db, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        var queryText = 'INSERT INTO "tasks" ("task_name") VALUES ($1);'
        db.query(queryText, [newTask], function (errorMakingQuery, result) {
            done();
            if (errorMakingQuery) {
                console.log('error making query', errorMakingQuery);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
    }); //end of pool
}); //end of post

module.exports = router;
