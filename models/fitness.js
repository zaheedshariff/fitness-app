const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// in the lessons, the fitnessSchema is the review and the accountSchema is the movie

const fitnessSchema = new Schema({
  workoutName: {
    type: String,
  },
  workoutType: {
    type: String,
    enum: ["Strength", "Cardio",],
  },
  muscleCategory: {
    type: String,
  },
  date: {
    type: Date,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  durationMins: {
    type: Number,
  },
});


const accountSchema = new Schema ({
  googleId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  weight: {
    type: Number,
  },
  sex: {
    type: String,
    enum: ["Male", "Female", "Prefer not to Say"],
  }, 
  workouts: [fitnessSchema],
});


module.exports = mongoose.model("Account", accountSchema);