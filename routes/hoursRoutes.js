const express = require('express');
const router = express.Router();
const hoursApi = require('./../controllers/hoursApi');

router.route('/').post(hoursApi.createHours);

// router.route('/:id').get(hoursApi.getHour);

module.exports = router;
