const EventsModel = require("../models/events.model");

module.exports.getEvents = async (req, res) => {
    await EventsModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else res.send("ID unknown" + err);
    });
}
module.exports.userEvents = async (req, res) => {
    await EventsModel.find({ user_id: req.body.user_id }, (err, docs) => {
        if (!err) res.send(docs);
        else res.send("ID unknown" + err);
    });
}

module.exports.createEvents = async (req, res) => {
    const newEvent = new EventsModel({
        event_id: "55542",
        user_id: "12121",
        visibility: false,
        participant: [""],
    });

    try {
        const event = await newEvent.save();
        return res.status(201).json(event);
    } catch (err) {
        return res.status(200).send(err);
    }
}
