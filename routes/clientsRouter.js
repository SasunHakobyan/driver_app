const Router = require('express').Router;

const ClientController = require("../controllers/ClientController");
const {postgresClient, mongoClient} = require("../db/index");

const clientController = new ClientController(postgresClient, mongoClient);
const router = new Router();

router.get('/getClients', (req, res) => {
    clientController.getClients()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send('Error');
            console.log(err);
        })
});



module.exports = router;