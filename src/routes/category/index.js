const express = require('express');

const tokenValidation = require('../../middlewares/tokenValidation');
// const categoryController = require('../../controllers/categoryController');

const router = express.Router();

router.post('/', tokenValidation);

module.exports = router;