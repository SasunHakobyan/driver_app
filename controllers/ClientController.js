const {ObjectId} = require("mongodb");

class ClientController {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    async getClients({limit, pageNumber}) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');

            const clientsCount = await clientCollection.count({});

            const dataLimit = Number(limit);
            const skip = (pageNumber - 1) * dataLimit;

            const clients = await clientCollection.find({}).limit(dataLimit).skip(skip).toArray();

            return {clientsCount, clients};
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

    async updateClient(clientId, updateData) {
        try {
            const driverDb = this.mongoClient.db('driver_app');
            const clientCollection = driverDb.collection('client');

            return await clientCollection.updateOne({_id: ObjectId(clientId)}, {$set: updateData});
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