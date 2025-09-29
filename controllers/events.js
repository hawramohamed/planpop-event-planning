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
router.get('/new', async (req, res) => {
  try{
    const currentUser = await User.findById(req.session.user._id);
    res.render('events/new.ejs', { user: currentUser });
  } catch (error){
    console.log(error);
    res.redirect('/');
  };
});

//post form
router.post('/', async (req, res) =>{
  try{
    const currentUser = await User.findById(req.session.user._id);
    const taskList = req.body.taskList
    const isDoneList = req.body.isDoneList
    
    console.log(req.body.taskList);
    console.log(req.body.isDoneList);
    const checklistArray = Array.isArray(taskList) ? taskList.map((task, idx) => ({
      task,
      isDone: isDoneList[idx] === 'yes'
    }))
    : [];

    console.log(checklistArray)
    const newEvent = {
      title: req.body.title,
      date: req.body.date,
      location: req.body.location,
      isPublic: req.body.isPublic === 'true',
      checklist: checklistArray
    };

    currentUser.events.push(newEvent);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/events`);

  } catch(error){
    console.log(error);
    res.redirect('/');
  };
});

module.exports = router;
