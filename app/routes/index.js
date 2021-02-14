const router = require('express').Router();
const post = require('./post.routes');

router.use('/post', post);

module.exports = router;
