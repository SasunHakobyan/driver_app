const {ObjectId} = require("mongodb");

class DriverController {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    getDrivers() {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const driverCollection = driverDb.collection('driver');
            return driverCollection.find({}).toArray();
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    getDriver(findCriteria = {}) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const driverCollection = driverDb.collection('driver');
            return driverCollection.findOne(findCriteria);
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    async insertDriver({username, password, tariff, rating}) {
        try {
            const currentTime = new Date();
            const registerDate = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

            const driverDb = this.mongoClient.db("driver_app");
            const driverCollection = driverDb.collection("driver");

            return await driverCollection.insertOne({username, password, tariff, rating, registerDate});
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    async updateDriver(driverId, updateData) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const driverCollection = driverDb.collection('driver');

            return await driverCollection.updateOne({_id: ObjectId(driverId)}, {$set:updateData});
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    deleteDriver(driverId) {
        try {
            const driverDb = this.mongoClient.db("driver_app");
            const driverCollection = driverDb.collection("driver");
            return driverCollection.deleteOne({_id: ObjectId(driverId)});

        } catch (err) {
            console.log(err);
            throw new err;
        }
    }
}

module.exports = DriverController;