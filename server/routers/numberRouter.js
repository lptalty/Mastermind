const express = require('express');
const numberController = require('../controllers/numberController');
const numberRouter = express.Router();

numberRouter.get('/computer', numberController.getNums, (req, res) => {
    res.status(200).json(res.locals.numberData)
} )

module.exports = numberRouter;