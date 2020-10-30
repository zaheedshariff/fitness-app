const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Account = require('../models/fitness');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Account.findOne({ 'googleId': profile.id }, function(err, Account) {
      if (err) return cb(err);
      if (account) {
        return cb(null, account);
      } else {
        // we have a new account via OAuth!
        var newAccount = new Account({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newAccount.save(function(err) {
          if (err) return cb(err);
          return cb(null, newAccount);
        });
      }
    });
  }
));

passport.serializeUser(function(account, done) {
    done(null, account.id);
});

passport.deserializeUser(function(id, done) {
    Account.findById(id, function(err, account) {
      done(err, account);
    });
  });