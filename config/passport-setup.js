const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/User");


passport.serializeUser((user, done) => {
    console.log('Serializing: ' + user.id)
    done(null, user.id)
})


passport.deserializeUser((id, done) => {
    console.log('Deserializing..')
    User.findById(id).then(user => {
      done(null, user);
    });
  });

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      // Find user by username/email or whatever you want to pass
      // Decrypt if you have hashed pass

        User.findOne({username: username}).then(user => {
            if(!user) {
                console.log('user not found')
                done(null, false, {message: 'User does not exist.'})
            } else {
                console.log('user found')
                done(null, user)
            }
        })
    }
  )
);
