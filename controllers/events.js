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

    // first check if there is a task
    let checklistArray = [];


    if (Array.isArray(taskList)) {
      checklistArray = taskList.map((task, idx) => ({
        task,
        isDone: isDoneList[idx] === 'true'
      }));
    } else if(checklistArray && isDoneList){
      // edge case, when only 1 task is submitted
      checklistArray = [{
        task: taskList,
        isDone: isDoneList
      }];
    };

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

//delete event 
router.delete('/:eventId', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Use the Mongoose .deleteOne() method to delete
    // an application using the id supplied from req.params
    currentUser.events.id(req.params.eventId).deleteOne();
    // Save changes to the user
    await currentUser.save();
    // Redirect back to the applications index view
    res.redirect(`/users/${currentUser._id}/events`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect('/');
  }
});

//editing the event
router.get('/:eventId/edit', async (req, res) => {
  try{
    const currentUser = await User.findById(req.session.user._id);
    const event = currentUser.events.id(req.params.eventId);
    res.render('events/edit.ejs', {
      event: event,
    });
  } catch (error){
    console.log(error);
    res.redirect('/')
  }
});


//publish edits of events
router.put('/:eventId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const event = currentUser.events.id(req.params.eventId);
    const taskList = req.body.taskList
    const isDoneList = req.body.isDoneList

     // first check if there is a task
    let checklistArray = []


    if (Array.isArray(taskList)) {
      checklistArray = taskList.map((task, idx) => ({
        task,
        isDone: isDoneList[idx] === 'true'
      }));
    } else if(checklistArray && isDoneList){
      // edge case, when only 1 task is submitted
      checklistArray = [{
        task: taskList,
        isDone: isDoneList
      }];
    };

    event.title = req.body.title;
    event.date = req.body.date;
    event.location = req.body.location;
    event.isPublic = req.body.isPublic === 'true';
    event.checklist = checklistArray;

    await currentUser.save();
    res.redirect(
      `/users/${currentUser._id}/events`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;
