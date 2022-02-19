const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_id: String,
    user_id: String,
    title: String,
    description: String,
    visibility: Boolean,
    participant: [String]
});

const EventsModel = mongoose.model("events", eventSchema);
module.exports = EventsModel;