const express = require("express");
const fs = require("fs");
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
  if (req.body.id) {
    db.findById(req.body.id)
      .then((image) => res.send(image))
      .catch((error) => res.send("No se encontro imagen."));
  } else {
    db.find()
      .then((image) => res.send(image))
      .catch((error) => res.send("No se encontro imagen."));
  }
});

router.post("/upload", upload.single("uploadImage"), async (req, res) => {
  const image = new db({
    name: req.body.name,
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    imageUrl: `http://localhost:3000/api/files/${req.file.filename}`,
    description: req.body.description,
    fileName: req.file.filename,
  });
  await image.save();
  res.send("Imagen subida con exito");
});

router.delete("/upload/:id", (req, res) => {
  db.findByIdAndRemove(req.params.id)
    .then((data) => {
      fs.unlink(`${__dirname}/uploads/${data.fileName}`, (err) => {
        if (err) console.log(err);
        else console.log("Registro eliminado");
      });
      res.send("Imagen eliminada con exito");
    })
    .catch((error) => res.send("No se encontro imagen."));
  // .then((data) => res.send("Imagen eliminada con exito"))
});

module.exports = router;
