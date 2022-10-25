const Router = require("express");
const { getEvent, saveEvent, updateEvent, deleteEvent } = require("../controllers/eventController");
const router = Router()

router.get('/',getEvent)
router.post('/save',saveEvent)
router.post('/update',updateEvent)
router.post('/delete',deleteEvent)

module.exports = router;