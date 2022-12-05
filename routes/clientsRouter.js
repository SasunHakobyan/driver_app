const Router = require('express').Router;

const ClientController = require("../controllers/ClientController");
const {mongoClient} = require("../db/index");
const {ObjectId} = require("mongodb");
const {serverErrorResponse, notFoundErrorResponse} = require("../errors/error");

const clientController = new ClientController(mongoClient);
const router = new Router();

router.get('/:id', async (req, res) => {
    try {
        const client = await clientController.getClient({_id: ObjectId(req.params.id)});

        if (!client) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {client}
            });
        }
    } catch (err) {
        res.json(serverErrorResponse);
    }
})

router.get('/', async (req, res) => {
    try {
        const clients = await clientController.getClients();
        res.json({
            responseCode: 200,
            data: {clients}
        });

    } catch (err) {
        res.json(serverErrorResponse);
    }
});

router.post('/addClient', async (req,res) => {
    try {
        const {username, password, cardCredentials} = req.body;
        const insertResult = await clientController.insertUser({username, password, cardCredentials});

        res.json({
            responseCode: 200,
            data: {insertResult}
        });
    } catch (err) {
        res.json(serverErrorResponse);
    }
});

router.put('/updateClient', async (req, res) => {
    try {
        const updateData = req.body.updateData;
        const updateResult = await clientController.updateClient(req.body.clientId, updateData);

        if (updateResult.matchedCount === 0) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {updateResult}
            });
        }
    } catch (err) {
        res.json(serverErrorResponse);
    }
})

router.delete('/deleteClient', async (req,res) => {
    try {
        const clientId = req.body.clientId;
        const deleteResult = await clientController.deleteClient(clientId);

        if (deleteResult.deletedCount === 0) {
            res.json(notFoundErrorResponse);
        } else {
            res.json({
                responseCode: 200,
                data: {deleteResult}
            });
        }
    } catch (err) {
        res.json(serverErrorResponse);
    }
});

module.exports = router;