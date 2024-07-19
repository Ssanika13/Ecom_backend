const express = require('express');
const router = express.Router();
const { getSportsUnifrom } = require('../Controllers/SportsUniformController');

router.get('/', getSportsUnifrom);

module.exports = router;
