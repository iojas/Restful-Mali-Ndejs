var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ojas kale');
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
    if (err) throw err

    console.log('You are now connected...');

    connection.query('SELECT * FROM applicant', function(err, results, fields) {

      if (err) throw err
      var resApp = [];
      for(var a=0;a<results.length;a++){
        //console.log(JSON.stringify(results[a]))
        resApp.push(results[a]);
      }
      res.json(resApp);
     // console.log(ret);
     // console.log(typeof ret[0])
     /*console.log(results.length);
      console.log(typeof results[0])
      console.log(results[0].name)
      console.log(results[0].lname)
      console.log(results[0].telephone)*/
    });

  });

});

module.exports = router;
