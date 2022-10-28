const Router = require("express");
const { getParticipant, saveParticipant, deleteParticipant,updateParticipant } = require("../controllers/participantController");
const router = Router()

router.get('/',getParticipant)
router.post('/save',saveParticipant)
router.post('/update',updateParticipant)
router.post('/delete',deleteParticipant)

module.exports = router;