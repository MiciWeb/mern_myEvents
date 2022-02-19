const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const userRoutes = require("./routes/user.routes");
const eventsRoutes = require("./routes/events.routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
require("./config/db");

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

app.use("/auth", authRoute);
app.use("/api/user", userRoutes);
app.use("/api/events", eventsRoutes);


app.listen("4000", () => {
    console.log("Server is running")
})