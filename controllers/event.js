const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

//router logic
router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const eventsItems = currentUser.pantry;

    res.render('events/index.ejs', {events: eventsItems});
  } catch (error){
    console.log(error);
    res.redirect('/');
  };
});


module.exports = router;
