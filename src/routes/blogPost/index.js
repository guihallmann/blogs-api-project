const express = require('express');

const tokenValidation = require('../../middlewares/tokenValidation');
const blogPostValidation = require('../../middlewares/blogPostValidation');

const router = express.Router();

router.post('/', tokenValidation, blogPostValidation);

module.exports = router;
