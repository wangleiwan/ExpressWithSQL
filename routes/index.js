var express = require('express');
var router = express.Router();
var Data = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Welcome to Express SQL"});
});

// router.get('/customers', function(req, res, next) {
  // Data.GetCustomers(function(recordset){
  //   res.render('index', {
  //     records: recordset,
  //     title: "Welcome to Express SQL"
  //   });
  // });
// });

router.get('/customers', function(req, res, next) {
  var id = req.query.q;
  if(id) {
    Data.GetCustomerByID(id, function(recordset) {
      res.render('index', {
        records: recordset,
        title: "Welcome to Express SQL"
      });
    });
  } else {
    Data.GetCustomers(function(recordset){
      res.render('index', {
        records: recordset,
        title: "Welcome to Express SQL"
      });
    });
  }
});

module.exports = router;
