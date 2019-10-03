var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

// **PORT NUMBER** //
  port: 8080,

// **USERNAME** //
  user: "Username",

// **PASSWORD** //
  password: "password",
  database: "productsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});