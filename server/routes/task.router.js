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
        var queryText = 'SELECT * FROM "tasks" ORDER BY "id";'
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

router.put('/:id', function (req, res) {
    var taskId = req.params.id;
    var completed = 'TRUE';
    pool.connect(function (err, db, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        var queryText = 'UPDATE "tasks" SET "complete" = $1 WHERE "id" = $2;'
        db.query(queryText, [completed, taskId], function (errorMakingQuery, result) {
            done();
            if (errorMakingQuery) {
                console.log('error making query', errorMakingQuery);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
    }); //end of pool
}); //end of put

router.delete('/:id', function (req, res) {
    var taskId = req.params.id;
    pool.connect(function (err, db, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        var queryText = 'DELETE from "tasks" WHERE "id" = $1;'
        db.query(queryText, [taskId], function (errorMakingQuery, result) {
            done();
            if (errorMakingQuery) {
                console.log('error making query', errorMakingQuery);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
    }); //end of pool
}); //end of delete

module.exports = router;
