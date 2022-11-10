const User = require('./../models/userModel');

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      user: newUser,
    });
  } catch (err) {
    res.status(400).json('required fields are not filled or in invalid format');
  }
};
