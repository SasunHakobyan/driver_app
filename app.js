const {postgresClient, mongoClient} = require("./db/index");
const queries = require("./db/queries");

const express = require('express');
const app = express();
const port = 5500;

postgresClient.query(queries.createTableQuery, (err, res) => {
    if (err) console.log(err);
});

app.get('/getDrivers', (req, res) => {
    const data = [
        {
            id: '6377e4dc0f09386ed3f0fc4e',
            username: 'sasunhakobyan',
            password: '12345',
            tariff: 'comfort',
            rating: 5,
            register_date: '2022-11-18'
        },
        {
            id: '6377e4dc0f09386ed3f02345e',
            username: 'mikel',
            password: 'root',
            tariff: 'econom',
            rating: 3,
            register_date: '2022-11-13'
        }
    ];

    res.json(data);
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});

postgresClient.end();