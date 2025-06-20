const express = require('express');
const router = express.Router();
const { getRestakers } = require('../controllers/restakercontroller');

router.get('/', getRestakers);

module.exports = router;