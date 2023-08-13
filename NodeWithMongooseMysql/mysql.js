const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  passwrod: "root",
  database: "NewDb",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
