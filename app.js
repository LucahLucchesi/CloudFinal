const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('CNIT 371 Final!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
