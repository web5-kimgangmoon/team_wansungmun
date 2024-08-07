import session from "express-session";
import fileStore from "session-file-store";
import express from "express";

const app = express();

const FileStore = fileStore(session);

const sessions = app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "project",
    name: "user",
    store: new FileStore({
      reapInterval: 1000,
      path: "./user_session",
    }),
    cookie: {
      maxAge: 20 * 60 * 1000,
    },
  })
);

export default sessions;
