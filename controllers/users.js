const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//show all users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.render('users/index.ejs', { users: allUsers });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

//selected user events
router.get('/:userId', async (req, res) => {
    try{
        const selectedUser = await User.findById(req.params.userId);

        res.render('users/show.ejs', {selectedUser, events: selectedUser.events});
    } catch (error){
        console.log(error);
        res.redirect('/');
    };
});

module.exports = router;