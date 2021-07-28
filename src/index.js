const express = require("express");
const router = require("./router");
const cors = require("cors");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/upload", router);

app.listen(app.get("port"), () => console.log(`Server on ${app.get("port")}`));
