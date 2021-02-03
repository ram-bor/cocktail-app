const router = require('express').Router();
const cocktailController = require('../controllers/cocktail-controller');

router.get('/cocktails', cocktailController.showCocktails);
router.get('/', (req, resp) => {
  resp.redirect('/cocktails');
});

module.exports = router;
