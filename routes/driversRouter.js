const Router = require('express').Router;

const DriverController = require('../controllers/DriverController');
const {postgresClient, mongoClient} = require('../db/index');

const driverController = new DriverController(postgresClient, mongoClient);
const router = new Router();

router.get('/getDrivers', (req, res) => {
    driverController.getDrivers()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send('Error');
            console.log(err);
        });
})

module.exports = router;