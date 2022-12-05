const Router = require('express').Router;

const DriverController = require('../controllers/DriverController');
const {mongoClient} = require('../db/index');
const {ObjectId} = require("mongodb");
const {notFoundErrorResponse, serverErrorResponse} = require("../errors/error");

const driverController = new DriverController(mongoClient);
const router = new Router();

router.get('/:id', async (req, res) => {
    try {
        const driver = await driverController.getDriver({_id: ObjectId(req.params.id)});

        if (!driver) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {driver}
            });
        }
    } catch (err) {
        res.json(serverErrorResponse);
    }
});

router.get('/', async (req, res) => {
    try {
        const driversData = await driverController.getDrivers({limit: req.query.limit, pageNumber: req.query.pageNumber});
        const drivers = driversData.drivers;

        res.json({
            responseCode: 200,
            driversCount: driversData.driversCount,
            data: {drivers}
        });
    } catch (err) {
        res.json(serverErrorResponse);
    }
});

router.post('/addDriver', async (req, res) => {
    try {
        const {username, password, tariff, rating} = req.body;
        const insertResult = await driverController.insertDriver({username, password, tariff, rating});

        res.json({
            responseCode: 200,
            data: {insertResult}
        });
    } catch (err) {
        res.json(serverErrorResponse);
    }
});

router.put('/updateDriver', async(req, res) => {
    try {
        const updateData = req.body.updateData;
        const updateResult = await driverController.updateDriver(req.body.driverId, updateData);

        if (updateResult.matchedCount === 0) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {updateResult}
            });
        }

    } catch (err) {
        console.log(err);
        res.json(serverErrorResponse);
    }
});

router.delete('/deleteDriver', async (req, res) => {
    try {
        const driverId = req.body.driverId;
        const deleteResult = await driverController.deleteDriver(driverId);

        if (deleteResult.deletedCount === 0) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {deleteResult}
            });
        }
    } catch (err) {
        res.json(serverErrorResponse);
        console.log(err);
    }
});

module.exports = router;