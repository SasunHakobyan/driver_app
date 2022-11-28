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

router.get('/:id', async (req, res) => {
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

router.get('/', async (req, res) => {
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

router.post('/addClient', async (req,res) => {
    try {
        const {username, password, cardCredentials} = req.body;
        const insertResult = await clientController.insertUser({username, password, cardCredentials});

        res.json({
            responseCode: 0,
            data: {insertResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
});

router.post('/updateClient', async (req, res) => {
    try {
        const updateData = req.body.updateData;
        const updateResult = await clientController.updateClient(req.body.clientId, updateData);

        res.json({
            responseCode: 0,
            data: {updateResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
})

router.delete('/deleteClient', async (req,res) => {
    try {
        const clientId = req.body.clientId;
        const deleteResult = await clientController.deleteClient(clientId);

        res.json({
            responseCode: 0,
            data: {deleteResult}
        });
    } catch (err) {
        res.json(errorResponse);
    }
});

module.exports = router;