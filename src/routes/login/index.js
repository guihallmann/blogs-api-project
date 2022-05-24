const express = require('express');

const loginValidation = require('../../middlewares/loginValidation');

const router = express.Router();

router.post('/', loginValidation);

module.exports = router;