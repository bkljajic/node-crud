const User = require('../models/user');

/**
 * Create User.
 */
exports.userCreate = function (req, res) {
  let user = new User(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      gender: req.body.gender
    }
  );

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('User created successfully.')
  })
};

/**
 * Read User.
 */
exports.userRead = function (req, res) {
  User.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
};

/**
 * Update User.
 */
exports.userUpdate = function (req, res) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
    if (err) return next(err);
    res.send('User updated successfully.');
  });
};

/**
 * Delete User.
 */
exports.userDelete = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('User deleted successfully.');
  })
};