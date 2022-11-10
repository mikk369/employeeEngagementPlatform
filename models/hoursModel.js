const mongoose = require('mongoose');
const userModel = require('./userModel');
const hoursSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: [true, 'Must have month'],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Must have value'],
    trim: true,
  },
  days: [
    {
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      day: {
        type: String,
        required: [true, 'Must have day'],
        trim: true,
      },
      hours: { type: Number, required: [true, 'Must have hour'], trim: true },
    },
  ],
});

module.exports = mongoose.model('Hours', hoursSchema);
