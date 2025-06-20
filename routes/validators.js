const express = require('express');
const router = express.Router();
const { getValidators } = require('../controllers/validatorcontroller');

router.get('/', getValidators);

module.exports = router;