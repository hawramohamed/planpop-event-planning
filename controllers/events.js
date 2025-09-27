const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

//router logic
//index
router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const eventsItems = currentUser.events;

    res.render('events/index.ejs', {events: eventsItems});  } catch (error){
    console.log(error);
    res.redirect('/');
  };
});

//form
router.get('/new', (req, res) => {
  try{
    res.render('events/new.ejs')
  } catch (error){
    console.log(error);
  };
});
module.exports = router;
