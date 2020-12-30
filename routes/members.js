const express = require('express');
//const { route } = require('.');
const router = express.Router();
const {ensureAuth} = require('../middleware/auth');

const Member = require('../models/Member');

//router.get('/', ensureAuth, async (req, res) => {
router.get('/', ensureAuth, async (req, res) => {
    try {
        const members = await Member.find({})
            .populate('user')
            .sort({})
            .lean();

        return res.send(members);            

    } catch (error) {
        // return server error
        return res.status(500);
    }
});

module.exports = router; 