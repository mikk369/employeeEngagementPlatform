const Hours = require('../models/hoursModel');
const fs = require('fs');

exports.getAllhours = async (req, res, next) => {
  try {
    const hours = await Hours.find();
    res.status(200).json({
      status: 'success',
      results: hours.length,
      data: {
        hours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createHours = async (req, res, next) => {
  try {
    const newHour = await Hours.create(req.body);
    res.status(201).json({
      status: 200,
      hour: newHour,
    });
  } catch (error) {
    res.status(411).json({ error: 'One or more required fields empty' });
  }
};

exports.getHour = async (req, res, next) => {
  const hours = await Hours.findById(req.params.id);
  if (!hours) {
    return next('hours with given ID not found', 404);
  }
  res.status(200).json({
    status: 'success',
    data: {
      hours,
    },
  });
};

exports.updateHours = async (req, res, next) => {
  try {
    const hour = await Hours.findByIdAndUpdate(req.params.id, req.body, {
      //"new option true" returns the new updated document
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: {
        hour,
      },
    });
  } catch (err) {
    res.status(400).json({
      message:
        'requests body does not contain required fields or required fields are invalid format',
    });
  }
};

exports.deleteHour = async (req, res, next) => {
  try {
    await Hours.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'no document with given id',
    });
  }
};
