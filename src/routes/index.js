const express = require('express');
const loginRoute = require('./login');
const userRoute = require('./user');
const categoriesRouter = require('./category');
const blogPostRouter = require('./blogPost');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userRoute);
router.use('/categories', categoriesRouter);
router.use('/post', blogPostRouter);

module.exports = router;