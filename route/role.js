const express = require("express");
const router = express.Router();
const controller=require("../controller/role")


router.post("/",controller.createUser);
router.get("/",controller.getAlluser);

module.exports = router;