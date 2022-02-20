const router = require("express").Router();
const eventsController = require("../controllers/events.controller");

router.get("/:id", eventsController.getEvents)
// router.get("/:id", eventsController.userEvents)
router.post("/", eventsController.createEvents)

module.exports = router;