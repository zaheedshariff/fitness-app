var express = require("express");
var router = express.Router();

// this declares the controller for the workouts page
const fitnessCtrl = require("../controllers/fitness");
const fitness = require("../models/fitness");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


// Create an Account
// These are the routes to the account page:
router.get("/fitness/login", fitnessCtrl.myAccount);

// create a new profile, manually
router.post("/add-user", fitnessCtrl.createAccount);


// Now create a workout
// Route for workout: 
router.get("/fitness/new", fitnessCtrl.newWorkout);

// post workout that specific parent directory:
router.post('/add-workout', fitnessCtrl.createWorkout);

//get all workouts 
router.get('/fitness/all', fitnessCtrl.getAll);



// POST /Workouts
// router.post('/add-workout', fitnessCtrl.createFitness);



module.exports = router;