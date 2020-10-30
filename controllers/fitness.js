// This imports the model
let Account = require("../models/fitness");

// first render the path and create function:
function newWorkout(req, res) {
  res.render("fitness/new.ejs");
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
// this was the old code

function createWorkout(req, res) {
  Account.findById("5f9c1c1ce933d88b27956960", function(err, account) {
    account.workouts.push(req.body);
    account.save(function(err) {
      res.redirect('/fitness/all');
    });
  });
}


// This function will show all the workouts
function getAll (req, res) {
  Account.findById("5f9c1c1ce933d88b27956960", function(err, db_fitness){
      console.log('this is being logged:' + db_fitness);
      res.render('fitness/all', { db_fitness });
  })
};

function googleIndex(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Account.find(modelQuery)
  .sort(sortKey).exec(function(err, account) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('/', {
      account,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skills => skills.id === parseInt(id));
  skills.splice(idx, 1);
  res.redirect('/');
};

module.exports = {
  googleIndex,
  newWorkout,
  createWorkout, 
  getAll,
  deleteOne,
};



// this function is a placeholder for the accounts page
// function myAccount(req, res) {
//   res.render("fitness/account.ejs");
// };

// This function will create a new account
// function createAccount(req, res)  {
//   console.log('form data' + JSON.stringify(req.body)); //the json.stringify helps to see what users are sending in the terminal for the form data
//   Account.create(req.body, function(err) { //this creates an object into the database
//       res.redirect('/fitness/new');  // in this instance its easier to do a redirect, as opposed to render, render will ask for the function and parameters
//   })
// };

  // module.exports = {
  //   myAccount,
  //   createAccount,
  // };