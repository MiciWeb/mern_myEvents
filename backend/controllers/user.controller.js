const UserModel = require("../models/user.model");

module.exports.user = async (req, res) => {
    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else res.send("ID unknown" + err);
    });
}

module.exports.getAllUsers = async (req, res) => {
    UserModel.find({}, (err, docs) => {
        res.status(200).json(docs)
    })
}