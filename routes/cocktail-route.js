const router = require('express').Router();

// Import controller
const cocktailController = require('../controllers/cocktail-controller');

router.get('/cocktail', cocktailController.showCocktails);

module.exports = router;
