const express = require('express');

const tokenValidation = require('../../middlewares/tokenValidation');
const blogPostValidation = require('../../middlewares/blogPostValidation');
const blogPostController = require('../../controllers/blogPostController');

const router = express.Router();

router.post('/', tokenValidation, blogPostValidation, blogPostController.create);
router.get('/', tokenValidation, blogPostController.getAll);

module.exports = router;
