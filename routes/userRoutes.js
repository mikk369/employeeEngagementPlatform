const express = require('express');
const router = express.Router();
const userApi = require('./../controllers/userApi');
const authController = require('./../controllers/authController');

router.post('/users', authController.signup);
router.post('/sessions', authController.login);

router.route('/').post(userApi.createUser);

module.exports = router;
