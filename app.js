const {postgresClient, mongoClient} = require("./db/index");
const queries = require("./db/queries");

const DriverController = require('./controllers/DriverController');
const ClientController = require('./controllers/ClientController');

postgresClient.query(queries.createTableQuery, (err, res) => {
    if (err) console.log(err);
});

const driverController = new DriverController(postgresClient, mongoClient);
const clientController = new ClientController(postgresClient, mongoClient);

const express = require('express');
const app = express();
const port = 5500;

app.get('/getDrivers', (req, res) => {
    driverController.getDrivers()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send('Error');
            console.log(err);
        });
});

app.get('/getClients', (req, res) => {
    clientController.getClients()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send('Error');
            console.log(err);
        })
})

app.listen(port, () => {
    console.log(`Running on ${port}`);
});

postgresClient.end();