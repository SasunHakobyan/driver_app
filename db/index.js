const { Pool } = require("pg");
const { MongoClient } = require("mongodb");

const postgresClient = new Pool({
    user: 'postgres',
    password: 'root',
    database: 'driver_app',
    host: 'localhost',
    port: 5432,
});

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

module.exports = {
    postgresClient,
    mongoClient
};