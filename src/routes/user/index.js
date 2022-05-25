const express = require('express');

const userValidation = require('../../middlewares/userValidation');
const userController = require('../../controllers/userController');
const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router();

router.post('/', userValidation, userController.create);
router.get('/', tokenValidation, userController.getAll);
router.get('/:id', tokenValidation, userController.getById);

module.exports = router;