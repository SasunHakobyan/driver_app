class ClientController {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    getClients() {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');
            const clients = clientCollection.find({}).toArray();
            return clients;
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    getClient(findCriteria = {}) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');
            const clients = clientCollection.findOne(findCriteria);
            return clients;
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    insertData({username, password, cardCredentials}) {
        try {
            const currentTime = new Date();
            const registerDate = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

            const driverDb = this.mongoClient.db("driver_app");
            const clientCollection = driverDb.collection("client");
            const insertResult = clientCollection.insertOne({username, password, cardCredentials, registerDate});
            return insertResult;

        } catch (err) {
            console.log(err);
            throw new err;
        }
    }
}

module.exports = ClientController;