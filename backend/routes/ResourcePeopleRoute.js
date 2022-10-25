const Router = require("express");
const { getResourcePeople, saveResourcePeople, deleteResourcePeople,updateResourcePeople } = require("../controllers/ResourcePeopleController");
const router = Router()

router.get('/',getResourcePeople)
router.post('/save',saveResourcePeople)
router.post('/update',updateResourcePeople)
router.post('/delete',deleteResourcePeople)

module.exports = router;