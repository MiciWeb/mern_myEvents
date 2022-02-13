require("dotenv").config({ path: "./config/.env" });

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        }, 
        function (accessToken, refreshToken, profile, done) {
            // const userSchema = new mongoose.Schema({
            //     username: String,
            //     name: String,
            //     googleId: String,
            //     secret: String
            // });
            
            // // userSchema.plugin(passportLocalMongoose);
            // // userSchema.plugin(findOrCreate);
            
            // const User = new mongoose.model("User", userSchema);

            
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
            done(null, profile)
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
}); 
passport.deserializeUser((user, done) => {
    done(null, user);
}); 