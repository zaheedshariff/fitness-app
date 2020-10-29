const workoutSession = new Schema ({
  fitnessSchema: {
    type: String,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number, //needs to be changed to intervals of time
  },
  date: {
    type: Number, //need to record time, timestamp?
  },
});