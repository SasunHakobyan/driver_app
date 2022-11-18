const {postgresClient, mongoClient} = require("./db/index");
const queries = require("./db/queries");

const DriverController = require('./controllers/DriverController');

const express = require('express');
const app = express();
const port = 3000;

const driverController = new DriverController(postgresClient, mongoClient);

postgresClient.query(queries.createTableQuery, (err, res) => {
    if (err) console.log(err);
});

app.get('/getDrivers', (req, res) => {
    driverController.getDrivers()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        })
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});
