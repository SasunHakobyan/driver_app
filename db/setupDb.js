const {postgresClient} = require('./index');
const queries = require('./queries');

function setupDb() {
    postgresClient.query(queries.createTableQuery, (err, res) => {
        if (err) console.log(err);
    });
}

module.exports = setupDb;