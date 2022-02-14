require("dotenv").config({ path: "./config/.env" });
const mongoose = require('mongoose');

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            try {
                const userSchema = new mongoose.Schema({
                    _id: String,
                    username: {
                        type: String,
                        required: true,
                    },
                    email: {
                        type: String,
                    },
                    avatar: String,
                    bio: {
                        type: String,
                        max: 1024,
                    },
                });
                const User = new mongoose.model("google-user", userSchema);
                await User.findOne({ _id: profile.id }).then((item) => {
                    if (item === null) {
                        var user1 = new User({
                            _id: profile.id,
                            username:
                                profile.displayName,
                            email:
                                "",
                            avatar:
                                profile.photos[0].value,
                            bio: ""
                        });

                        user1.save()
                    } else {
                        console.log("deja inscrit")
                    }
                    return

                })
            } catch (e) {
                console.log(e)
            }

            done(null, profile)
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            try {
                const userSchema = new mongoose.Schema({
                    _id: String,
                    username: {
                        type: String,
                    },
                    email: {
                        type: String,
                    },
                    avatar: String,
                    bio: {
                        type: String,
                        max: 1024,
                    },
                });
                const User = new mongoose.model("github-user", userSchema);
                await User.findOne({ _id: profile.id }).then((item) => {
                    if (item === null) {
                        console.log(profile)
                        var user1 = new User({
                            _id: profile.id,
                            username:
                                profile.username,
                            email:
                                "",
                            avatar:
                                profile.photos[0].value,
                            bio: ""
                        });
                        user1.save()
                    } else {
                        console.log("deja inscrit")
                    }
                    return
                })
            } catch (e) {
                console.log(e)
            }


            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
}); 