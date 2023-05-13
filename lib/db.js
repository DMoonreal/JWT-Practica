const mysql = require("mysql");

const connection = mysql({
    host: "localhost",
    user: "root",
    database: "tienda",
    password:""
});
connection.connect();
module.exports = connection;