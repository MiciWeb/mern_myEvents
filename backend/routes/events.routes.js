const router = require("express").Router();
const eventsController = require("../controllers/events.controller");

router.get("/", eventsController.createEvents)
router.get("/:id", eventsController.getEvents)
router.post("/", eventsController.userEvents)

module.exports = router;