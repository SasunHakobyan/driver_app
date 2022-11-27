const Router = require('express').Router;

const DriverController = require('../controllers/DriverController');
const {mongoClient} = require('../db/index');
const {ObjectId} = require("mongodb");

const driverController = new DriverController(mongoClient);
const router = new Router();

const errorResponse = {
    responseCode: 1,
    errorMessage: 'Something went wrong',
    data: null
};

router.get('/:id', async (req, res) => {
    try {
        const driver = await driverController.getDriver({_id: ObjectId(req.params.id)});
        res.json({
            responseCode: 0,
            data: {driver}
        });
    } catch (err) {
        res.json(errorResponse);
    }
})

router.get('/', async (req, res) => {
    try {
        const drivers = await driverController.getDrivers();
        res.json({
            responseCode: 0,
            data: {drivers}
        });
    } catch (err) {
        res.json(errorResponse);
    }
})

router.post('/addDriver', async (req, res) => {
    try {
        const {username, password, tariff, rating} = req.body;
        const insertResult = await driverController.insertDriver({username, password, tariff, rating});

        res.json({
            responseCode: 0,
            data: {insertResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
});

router.delete('/deleteDriver', async (req, res) => {
    try {
        const driverId = req.body.driverId;
        const deleteResult = await driverController.deleteDriver(driverId);

        res.json({
            responseCode: 0,
            data: {deleteResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
});

module.exports = router;