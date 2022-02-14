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

            // userSchema.plugin(passportLocalMongoose);
            // userSchema.plugin(findOrCreate);

            // compile schema to model

            // a document instance

            try {
                const userSchema = new mongoose.Schema({
                    googleId: String,
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
                const User = new mongoose.model("users", userSchema);
                await User.findOne({ googleId: profile.id }).then((item) => {
                    if (item === null) {
                        var user1 = new User({
                            googleId: profile.id,
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

            // User.insert({
            //     googleId: profile.id,
            //     username:
            //         profile.displayName,
            //     email:
            //         "",
            //     avatar:
            //         profile.photos[0].value,
            //     bio: ""
            // }, function (user) {
            //     console.log(user);
            //     done(null, profile)
            // });
            // User.findOne().then(item => console.log(item))
            // User.findOrCreate({ googleId: profile.id, username: profile.displayName, email: "", avatar: photos[0], bio: "" }, function (err, user) {
            //     return cb(err, user);
            // });

            // console.log(profile)
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
        function (accessToken, refreshToken, profile, done) {
            console.log(profile)
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