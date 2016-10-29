var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/applicants', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'malisamaj1.crwqdxb9dkgh.us-west-2.rds.amazonaws.com',
    user: 'malisamaj',
    password: 'malisamaj',
    database: 'ojas'
  })
  //var obj=[{name:'ojas'}];
  var ret = [];
  connection.connect(function(err) {
    if (err) {
      res.send(err);
      throw err
    }

    console.log('You are now connected...');

    connection.query('SELECT * FROM applicant', function(err, results, fields) {

      if (err) {
        res.send(err);
        throw err
      }
      var resApp = [];
      for(var a=0;a<results.length;a++){
        //console.log(JSON.stringify(results[a]))
        resApp.push(results[a]);
      }
      res.json(resApp);

    });

  });

});


router.get('/applicants/accepted', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'malisamaj1.crwqdxb9dkgh.us-west-2.rds.amazonaws.com',
    user: 'malisamaj',
    password: 'malisamaj',
    database: 'ojas'
  })
  //var obj=[{name:'ojas'}];
  var ret = [];
  connection.connect(function(err) {
    if (err) {
      res.send(err);
      throw err
    }

    console.log('You are now connected...');

    connection.query('SELECT * FROM applicant where status=1', function(err, results, fields) {

      if (err) {
        res.send(err);
        throw err
      }
      var resApp = [];
      for(var a=0;a<results.length;a++){
        //console.log(JSON.stringify(results[a]))
        resApp.push(results[a]);
      }
      res.json(resApp);

    });

  });

});

router.get('/applicants/rejected', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'malisamaj1.crwqdxb9dkgh.us-west-2.rds.amazonaws.com',
    user: 'malisamaj',
    password: 'malisamaj',
    database: 'ojas'
  })
  //var obj=[{name:'ojas'}];
  var ret = [];
  connection.connect(function(err) {
    if (err) {
      res.send(err);
      throw err
    }

    console.log('You are now connected...');

    connection.query('SELECT * FROM applicant where status=-1', function(err, results, fields) {

      if (err) {
        res.send(err);
        throw err
      }
      var resApp = [];
      for(var a=0;a<results.length;a++){
        //console.log(JSON.stringify(results[a]))
        resApp.push(results[a]);
      }
      res.json(resApp);

    });

  });

});

router.get('/applicants/new', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'malisamaj1.crwqdxb9dkgh.us-west-2.rds.amazonaws.com',
    user: 'malisamaj',
    password: 'malisamaj',
    database: 'ojas'
  })
  //var obj=[{name:'ojas'}];
  var ret = [];
  connection.connect(function(err) {
    if (err) {
      res.send(err);
      throw err
    }

    console.log('You are now connected...');

    connection.query('SELECT * FROM applicant where status=0', function(err, results, fields) {

      if (err) {
        res.send(err);
        throw err
      }
      var resApp = [];
      for(var a=0;a<results.length;a++){
        //console.log(JSON.stringify(results[a]))
        resApp.push(results[a]);
      }
      res.json(resApp);

    });

  });

});

module.exports = router;
