const express = require('express');
const router = express.Router();
const userApi = require('./../controllers/userApi');
const authController = require('./../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.route('/').post(userApi.createUser);

module.exports = router;
