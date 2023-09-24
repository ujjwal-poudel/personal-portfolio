process.env.NODE_ENV = "development";

const express = require('./config/express');

const app = express();

app.listen(3000);

module.exports = app;

console.log("Server running at http://localhost:3000/");