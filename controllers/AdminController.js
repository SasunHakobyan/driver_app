class AdminController {
    constructor(postgresClient, mongoClient) {
        this.postgresClient = postgresClient;
        this.mongoClient = mongoClient;
    }

    insertData({username, password, owner}) {
        const queryString = `INSERT INTO admin(username, password, owner) VALUES ('${username}', '${password}', ${owner});`;
        const driverDb = this.mongoClient.db("driver_app");

        return this.postgresClient
            .query(queryString)
            .then(res => {
                console.log("Admin inserted in POSTGRES");

                const adminCollection = driverDb.collection("admin");
                adminCollection.insertOne({username,password,owner});
                console.log("Admin inserted in MONGO");

                return true;
            })
            .catch(err => {
                throw new err;
            });
    }
}

module.exports = AdminController;