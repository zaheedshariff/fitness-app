// This imports the model
let Account = require("../models/fitness");

// this function is a placeholder for the accounts page
function myAccount(req, res) {
  res.render("fitness/account.ejs");
};

// This function will create a new account
function createAccount(req, res)  {
  console.log('form data' + JSON.stringify(req.body)); //the json.stringify helps to see what users are sending in the terminal for the form data
  Account.create(req.body, function(err) { //this creates an object into the database
      res.redirect('/fitness/new');  // in this instance its easier to do a redirect, as opposed to render, render will ask for the function and parameters
  })
};

//add a workout session, to the account profile

// first render the path and create function:
function newWorkout(req, res) {
  res.render("fitness/new.ejs");
};

// modified this, took our req.params.id
// this function will create a workout for that specific user parent
function createWorkout(req, res) {
  Account.findById("5f9af3e52dc0a854c8569b44", function(err, account) {
    account.workouts.push(req.body);
    account.save(function(err) {
      res.redirect('/fitness/all');
    });
  });
}

// This function will show all the workouts
function getAll (req, res) {
  Account.findById("5f9af3e52dc0a854c8569b44", function(err, db_fitness){
      console.log('this is being logged:' + db_fitness);
      res.render('fitness/all', { db_fitness });
  })
};



// this function will post the new workout
// function createWorkout(req, res) {
//   // remove whitespace next to commas
//   req.body.muscleCategory = req.body.muscleCategory.replace(/\s*,\s*/g, ",");
//   // split if it's not an empty string
//   if (req.body.muscleCategory) req.body.muscleCategory = req.body.muscleCategory.split(",");
//   const workout = new Account(req.body);
//   workout.save(function (err) {
//     // one way to handle errors
//     if (err) { 
//       console.log(err);
//       return res.render("fitness/new.ejs") } 
//     // for now, redirect right back to index
//     res.redirect("/fitness/all");
//   });
// };


// this exports all the functions
module.exports = {
  myAccount,
  createAccount,
  newWorkout,
  createWorkout, 
  getAll,
};
