const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "frankyshg",
  password: "Mysql123",
  database: "practice_mysql_express",
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + db.threadId);
});

module.exports = { db };
