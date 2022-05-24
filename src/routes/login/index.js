const express = require('express');

const loginValidation = require('../../middlewares/loginValidation');
const loginController = require('../../controllers/loginController');

const router = express.Router();

router.post('/', loginValidation, loginController);

module.exports = router;