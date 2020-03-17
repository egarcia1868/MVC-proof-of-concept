const connection = require("./connection");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
  selectAll: (tableInput) => {
    var queryString = `SELECT * FROM ${tableInput};` ;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: (table, cols, vals) => {
    var queryString = `INSERT INTO ${table} (`;
// after getting this to work I'd like to try to reduce the code below a bit with template literals ------------
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    var queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;