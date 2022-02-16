const mongoose = require("mongoose");

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
const UserModel = mongoose.model("all-user", userSchema);
module.exports = UserModel;