const connection = require("connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
  selectAll: (tableInput) => {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: (insertFields, whatToInsert) => {
    var queryString = "INSERT INTO burgers ?? VALUES ?";
    console.log(queryString);
    connection.query(queryString, [insertFields, whatToInsert], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: (fieldOne, valueOne, fieldTwo, valueTwo) => {
    var queryString =
      "UPDATE burgers SET ??=? WHERE ??=?";

    connection.query(
      queryString,
      [fieldOne, valueOne, fieldTwo, valueTwo], (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;