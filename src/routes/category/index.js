const express = require('express');

const tokenValidation = require('../../middlewares/tokenValidation');
const categoryValidation = require('../../middlewares/categoryValidation');
const categoryController = require('../../controllers/categoryController');

const router = express.Router();

router.post('/', tokenValidation, categoryValidation, categoryController.create);
router.get('/', tokenValidation, categoryController.getAll);

module.exports = router;