class ClientController {
    constructor(postgresClient, mongoClient) {
        this.postgresClient = postgresClient;
        this.mongoClient = mongoClient;
    }

    getClients() {
        const driverDb = this.mongoClient.db('driver_app');
        const clientCollection = driverDb.collection('client');
        const clients = clientCollection.find({}).toArray();
        return clients;
    }

    insertData({username, password, card_credentials, register_date}) {
        const queryString = `INSERT INTO client(username, password, card_credentials, register_date) VALUES ('${username}', '${password}', '${card_credentials}', '${register_date}');`;
        const driverDb = this.mongoClient.db("driver_app");

        return this.postgresClient
            .query(queryString)
            .then(res => {
                console.log("Client inserted in POSTGRES");

                const clientCollection = driverDb.collection("client");
                clientCollection.insertOne({username, password, card_credentials, register_date});
                console.log("Client inserted in MONGO");

                return true;
            })
            .catch(err => {
                throw new err;
            });
    }
}

module.exports = ClientController;