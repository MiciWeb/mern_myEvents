const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const userRoutes = require("./routes/user.routes");
// const postRoutes = require("./routes/post.routes");
const app = express();
require("./config/db");

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);
app.use("/api/user", userRoutes);
// app.use("/api/post", postRoutes);


app.listen("4000", () => {
    console.log("Server is running")
})