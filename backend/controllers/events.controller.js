const EventsModel = require("../models/events.model");

module.exports.getEvents = async (req, res) => {
    await EventsModel.find({ event_id: req.params.id }, (err, docs) => {
        if (docs.length == 0) res.status(404).send("ID unknown")
        else if (err) res.send("erreur" + err);
        else res.send(docs);
    });
}
// module.exports.userEvents = async (req, res) => {
//     console.log(req.params.id)
//     await EventsModel.findById(req.params.id, (err, docs) => {
//         if (!err) res.send(docs);
//         else res.send("ID unknown" + err);
//     });
// }

module.exports.createEvents = async (req, res) => {
    const newEvent = new EventsModel({
        event_id: req.body.event_id,
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        visibility: req.body.visibility,
        participant: [0],
    });

    try {
        const event = await newEvent.save();
        return res.status(201).json(event);
    } catch (err) {
        return res.status(200).send(err);
    }
}
