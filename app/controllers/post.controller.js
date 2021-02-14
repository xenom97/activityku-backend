const { body, validationResult } = require('express-validator');
const db = require('../models');
const Post = db.posts;

// Create and Save a new Post
exports.create = (req, res) => {
  body('username').isEmpty();
  body('activity').isEmpty();
  body('likes').isEmpty();

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      message: errors.array(),
    });
  } else {
    const { username, activity, likes } = req.body;
    const post = new Post({
      username,
      activity,
      likes,
    });

    post.save(function (err, savedPost) {
      if (err) {
        return res.status(400).json({ success: false, message: err });
      }
      res.status(200).json({ success: true, message: savedPost });
    });
  }
};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
  Post.find({}, function (err, posts) {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    res.status(200).json({ success: true, message: posts });
  });
};

// Find a single Post with an id
// exports.findOne = (req, res) => {};

// Update a Post by the id in the request
// exports.update = (req, res) => {};

// Delete a Post with the specified id in the request
// exports.delete = (req, res) => {};

// Delete all Posts from the database.
// exports.deleteAll = (req, res) => {};

// Find all published Posts
// exports.findAllPublished = (req, res) => {};
