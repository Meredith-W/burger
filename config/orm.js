var connection = require('../config/connection.js');

var orm = {
   insertOne: function(tableInput, nameInput, cb) { 
      var s = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
      connection.query(s, [nameInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  updateOne: function(tableInput, idInput, cb) {
      var s = "UPDATE " + tableInput + " SET devoured = 1  WHERE burger_name = ?";
      connection.query(s, [idInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  selectAll: function(cb) {
      var s = 'SELECT * FROM burgers';
      connection.query(s, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};

module.exports = orm;
