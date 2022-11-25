const Router = require('express').Router;

const ClientController = require("../controllers/ClientController");
const {mongoClient} = require("../db/index");
const {ObjectId} = require("mongodb");

const clientController = new ClientController(mongoClient);
const router = new Router();

const errorResponse = {
    responseCode: 1,
    errorMessage: 'Something went wrong',
    data: null
};

router.get('/getClients', async (req, res) => {
    try {
        const clients = await clientController.getClients();
        res.json({
            responseCode: 0,
            data: {clients}
        });

    } catch (err) {
        res.json(errorResponse);
    }
});

router.get('/getClient/:id', async (req, res) => {
    try {
        const client = await clientController.getClient({_id: ObjectId(req.params.id)});
        res.json({
            responseCode: 0,
            data: {client}
        });
    } catch (err) {
        res.json(errorResponse);
    }
})

router.post('/addClient', async (req,res) => {
    try {
        const {username, password, cardCredentials} = req.body;
        const insertResult = await clientController.insertData({username, password, cardCredentials});

        res.json({
            responseCode: 0,
            data: {insertResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
});


module.exports = router;