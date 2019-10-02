const passport = require("passport");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passportSetup = require("./config/passport-setup");
const app = express();

const PORT = 3000;

// View engine
app.set("view engine", "ejs");

// Connect to DB
const db = mongoose;
const mongoURI = require("./config/keys").mongoURI;
db.connect(
  mongoURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to db...");
  }
);

// Access req object
app.use(express.urlencoded({ extended: false }));

// Passport middleware routes
const cookieSecret = require("./config/keys").cookieSecret;
app.use(
  session({
    resave: true,
    secret: cookieSecret,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("/index", require("./routes/index"));

// Host server on PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
