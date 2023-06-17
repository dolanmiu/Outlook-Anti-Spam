import express from "express";
import session from "express-session";
import { createServer } from "http";
import passport from "passport";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import refresh from "passport-oauth2-refresh";
import fs from "fs";

import { setAuthDetails } from "./auth-details.js";
import {
  AUTH_SCOPE,
  CLIENT_ID,
  CLIENT_SECRET,
} from "./outlook-api/constants.js";

const app = express();
const httpServer = createServer(app);

const strategy = new MicrosoftStrategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3000/myapp/",
    scope: AUTH_SCOPE,
  },
  (
    accessToken: string,
    refreshToken: string,
    profile: Record<string, any>,
    done: (err: Error | null, profile: any) => void,
  ) => {
    setAuthDetails({ accessToken, refreshToken, profile });
    done(null, true);
  },
);

passport.use(strategy);
refresh.use(strategy);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user: boolean, done) {
  done(null, user);
});

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.use(passport.initialize());

app.get("/login", function (req, res, next) {
  passport.authenticate("microsoft", (err: Error, user: any, info: any) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }

    req.login(user, next);
  })(req, res, next);
});

app.get(
  "/myapp",
  passport.authenticate("microsoft", { failureRedirect: "/login" }),
  (_, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  },
);

app.get("/emails", (_, res) => {
  fs.readFile("./latest_emails.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).json(JSON.parse(data));
  });
});

app.use("/", express.static("../spa/dist/spa"));

export const startServer = async () => {
  httpServer.listen(3000, () => {
    console.log("listening on *:3000");
  });
};
