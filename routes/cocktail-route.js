const router = require('express').Router();
const cocktailController = require('../controllers/cocktail-controller');

router.get('/cocktails', cocktailController.showCocktails);
router.get('/', (req, resp) => {
  resp.redirect('/cocktails');
});
router.get('/cocktails/cocktail', cocktailController.showRandomCocktail);
router.get('/cocktails/cocktail/id/:id', cocktailController.showCocktailById);

module.exports = router;
