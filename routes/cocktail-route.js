const router = require('express').Router();
const cocktailController = require('../controllers/cocktail-controller');

router.get('/cocktail', cocktailController.showCocktails);

router.use('/cocktail', cocktailController.showCocktails);

module.exports = router;

