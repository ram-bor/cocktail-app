const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use('/cocktail', require('./cocktail-route'));

module.exports = router;
