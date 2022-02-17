const UserModel = require("../models/user.model");

module.exports.user = async (req, res) => {
    await UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else res.send("ID unknown" + err);
    });
}

module.exports.getAllUsers = async (req, res) => {
    await UserModel.find({}, (err, docs) => {
        res.status(200).json(docs)
    })
}

module.exports.updateUser = async (req, res) => {
    await UserModel.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                bio: req.body.bio
            }
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
        (err, docs) => {
            if (err) return res.status(500).send({ message: err });
            else return res.send(docs);
        }
    )
}