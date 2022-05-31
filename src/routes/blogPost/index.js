const express = require('express');

const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation);

module.exports = router;
