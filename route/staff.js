const express = require("express");
const router = express.Router();
const staffController = require("../controller/staff");
var multer = require("multer");
const {authenticate} = require("../middelwares/auth")

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var uploads = multer({ storage: storage });
router.post(
  "/bulk-upload",
  uploads.single("file"),
  staffController.importCsvFile
);


router.post(
    "/upload",
    staffController.singleUpload
  );

module.exports = router;
