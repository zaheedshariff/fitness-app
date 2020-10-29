const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// we can see this in the terminal	
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// Connected to MongoDB at localhost:27017 < what is seen
