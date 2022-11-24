require('./db/setupDb')();

const express = require('express');
const app = express();
const port = 5500;

const clientsRouter = require('./routes/clientsRouter');
const driversRouter = require('./routes/driversRouter');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/clients', clientsRouter);
app.use('/drivers', driversRouter);

app.listen(port, () => {
    console.log(`Running on ${port}`);
});