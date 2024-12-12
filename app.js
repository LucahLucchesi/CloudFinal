const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// Sends public directory to webserver
app.use(express.static("public"));


app.listen(port);
console.log(`App running on http://localhost:${port}`);
