const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: __dirname + "/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/upload", (req, res) => {
  res.send("Hello world");
});

router.post("/upload", upload.single("uploadImage"), (req, res) => {
  res.send("Datos enviados");
});

module.exports = router;
