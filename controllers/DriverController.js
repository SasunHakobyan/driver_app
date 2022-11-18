class DriverController {
    constructor(postgresClient, mongoClient) {
        this.postgresClient = postgresClient;
        this.mongoClient = mongoClient;
    }

    getDrivers() {
        const driverDb = this.mongoClient.db('driver_app');
        const driverCollection = driverDb.collection('driver');
        const drivers = driverCollection.find({}).toArray();
        return drivers;
    }

    insertData({username, password, tariff, rating, register_date}) {
        const queryString = `INSERT INTO driver(username, password, tariff, rating, register_date) VALUES ('${username}', '${password}', '${tariff}', ${rating}, '${register_date}')`;
        const driverDb = this.mongoClient.db("driver_app");

        return this.postgresClient
            .query(queryString)
            .then(res => {
                console.log("Driver inserted in POSTGRES");

                const driverCollection = driverDb.collection("driver");
                driverCollection.insertOne({username, password, tariff, rating, register_date});
                console.log("Driver inserted in MONGO");

                return true;
            })
            .catch(err => {
                throw new err;
            })
    }
}

module.exports = DriverController;