const express = require("express");
const router = express.Router();
const controller=require("../controller/user")
const {authenticate} = require("../middelwares/auth")
const middleware  = require('../middelwares/rolecheck-handlre')


router.post("/signup", require("../controller/user").createUser);
router.post("/login", require("../controller/user").login)
router.get("/",controller.getAlluser);
router.get("/:userID",authenticate,middleware.rolecheck(["admin"]), controller.getUser);
router.delete("/:userID", authenticate , controller.deleteUser);
router.put("/:userID", authenticate,controller.updateUser);
module.exports = router;               