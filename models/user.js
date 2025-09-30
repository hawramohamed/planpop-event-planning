const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  task:{
    type: String,
    required: true,
  },
  isDone:{
    type: Boolean,
  },
});

const eventSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  isPublic:{
    type: Boolean,
    required: true,
  },
  checklist:[checklistSchema],

});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  events:[eventSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
