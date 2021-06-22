const express = require("express");
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const db = require("./database");
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

router.post("/upload", upload.single("uploadImage"), async (req, res) => {
  console.log(req.file);
  const image = new db({
    name: req.body.name,
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    imageUrl: `http://localhost:3000/api/files/${req.file.filename}`,
    description: req.body.description,
  });
  await image.save();
  res.send("Imagen subida con exito");
  console.log(image);
});

module.exports = router;
