var sql = require('mssql');
var settings = require('./settings');

exports.GetCustomers = function(callback) {
  sql.connect(settings.config).then(function() {
    new sql.Request()
    .query('select * from Customer').then(function(recordset) {
      // console.dir(recordset);
      callback(recordset);
    }).catch(function(err) {
      console.error('Error', err);
    });
  });
}

exports.GetCustomerByID = function(id, callback) {
  sql.connect(settings.config).then(function() {
    new sql.Request()
    .input('param', sql.NVarChar, id)
    .query('select * from Customer where customerId = @param').then(function(recordset){
      console.dir(recordset);
      callback(recordset);
    }).catch(function(err){
      console.error('Error', err);
    });
  });
}


  // var conn = new sql.Connection(settings.config, function(err){
  //   var request = new sql.Request(conn);
  //   request.query("select * from Customer", function(recordset){
  //     callback(recordset);
  //   });
  // });
