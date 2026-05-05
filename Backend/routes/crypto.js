const express = require('express');
const { getCryptos, getGainers, getNewListings, createCrypto } = require('../controllers/cryptoController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getCryptos);
router.get('/gainers', getGainers);
router.get('/new', getNewListings);
router.post('/', auth, createCrypto);

module.exports = router;
