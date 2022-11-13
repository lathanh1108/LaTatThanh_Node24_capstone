const express = require('express');
const app = express();
const rootRouter = require('./routes/index');

app.use(express.json());
app.use(express.static('./public'));
app.use('/', rootRouter);

app.listen(8080);