const {ObjectId} = require("mongodb");

class ClientController {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    getClients() {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');
            return clientCollection.find({}).toArray();
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    getClient(findCriteria = {}) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');
            return clientCollection.findOne(findCriteria);
        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    insertUser({username, password, cardCredentials}) {
        try {
            const currentTime = new Date();
            const registerDate = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

            const driverDb = this.mongoClient.db("driver_app");
            const clientCollection = driverDb.collection("client");
            return clientCollection.insertOne({username, password, cardCredentials, registerDate});

        } catch (err) {
            console.log(err);
            throw new err;
        }
    }

    deleteClient(clientId) {
        try {
            const driverDb = this.mongoClient.db("driver_app");
            const clientCollection = driverDb.collection("client");
            return clientCollection.deleteOne({_id: ObjectId(clientId)});

        } catch (err) {
            console.log(err);
            throw new err;
        }
    }
}

module.exports = ClientController;