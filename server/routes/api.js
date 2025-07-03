const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const courseController = require('../controllers/courseController');


// Define routes
router.post('/login', userController.login);
router.get('/home', courseController.getHomePageData);


module.exports = router;
