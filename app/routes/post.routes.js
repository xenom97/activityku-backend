const router = require('express').Router();
const post = require('../controllers/post.controller');

router.post('/', post.create).get('/', post.findAll);

module.exports = router;
