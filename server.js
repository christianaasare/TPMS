//Install express server
const express = require("express");
const path = require("path");
const SamlStrategy = require("passport-saml").Strategy;
const passport = require("passport");

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/tpms"));

app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["super secret"],
    maxAge: 2 * 24 * 60 * 60 * 1000 // 2 days
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new SamlStrategy(
    {
      protocol: "https://",
      entryPoint: process.env.ENTRY_POINT, // SSO URL (Step 2)
      issuer: process.env.ISSUER, // Entity ID (Step 4)
      path: "/auth/saml/callback" ,  // ACS URL path (Step 4)
      cert: process.env.CERT
    },
    function(profile, done) {
      // Parse user profile data
      done(null, {
        email: profile.email,
        name: profile.name
      });
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get(
  "/login",
  passport.authenticate("saml", {
    successRedirect: "/admin",
    failureRedirect: "/login"
  })
);

app.get("/logout", function(req, res) {
  req.logout();
  res.end("You have logged out.");
});

app.post(
  "/auth/saml/callback",
  passport.authenticate("saml", {
    failureRedirect: "/",
    successRedirect:"/home",
    failureFlash: true
  }),
  function(req, res) {
    res.redirect("/");
  }
);

app.all("*", function(req, res, next) {
  if (req.isAuthenticated() || process.env.NODE_ENV !== "production") {
    next();
  } else {
    res.redirect("/login");
  }
});
app.get("/home", function(req, res) {
  res.redirect("https://tpms-ui.herokuapp.com/admin");
  // res.sendFile(path.join(__dirname+'/dist/tpms/index.html'));
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/tpms/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
