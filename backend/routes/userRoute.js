const Router = require("express");
const { getuser, saveuser } = require("../controllers/userController");
const router = Router()

router.post('/get',getuser)
router.post('/save',saveuser)

module.exports = router;