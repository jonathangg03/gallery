const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const db = require("./database");
const router = express.Router();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = multer.diskStorage({
  destination: __dirname + "/public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
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

router.post("/", upload.single("uploadImage"), async (req, res) => {
  const imageUpload = await cloudinary.v2.uploader.upload(req.file.path);
  // console.log(imageUpload);
  const image = new db({
    name: req.body.name,
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    imageUrl: imageUpload.url,
    description: req.body.description,
    fileName: req.file.filename,
    public_id: imageUpload.public_id,
  });
  await image.save();
  fs.unlink(`${__dirname}/public/uploads/${req.file.filename}`, (err) => {
    if (err) console.log(err);
    else console.log("Registro eliminado");
  });
  res.send("Imagen subida con exito");
});

router.delete("/:id", (req, res) => {
  db.findByIdAndRemove(req.params.id)
    .then(async (data) => {
      await cloudinary.v2.uploader.destroy(data.public_id);
      res.send("Imagen eliminada con exito");
    })
    .catch((error) => res.send("No se encontro imagen."));
  // .then((data) => res.send("Imagen eliminada con exito"))
});

module.exports = router;
