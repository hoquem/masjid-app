const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

//router.get('/say-something', controllers.saySomething);
router.get('/members', controllers.getMembers);

module.exports = router;