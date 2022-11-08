const express = require('express');
const router = express.Router();
const hoursApi = require('./../controllers/hoursApi');

router.route('/').post(hoursApi.createHours).get(hoursApi.getAllhours);



router
  .route('/:id')
  .get(hoursApi.getHour)
  .patch(hoursApi.updateHours)
  .delete(hoursApi.deleteHour);

module.exports = router;
