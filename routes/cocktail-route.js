const router = require('express').Router();
const cocktailController = require('../controllers/cocktail-controller');

router.get('/', cocktailController.showCocktails);
router.get('/cocktails', cocktailController.showCocktails);

module.exports = router;
