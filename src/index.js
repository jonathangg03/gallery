const express = require("express");
const router = require("./router");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use("/api/files", express.static(__dirname + "/uploads"));
app.use(express.static(__dirname + "/public"));

app.listen(app.get("port"), () => console.log(`Server on ${app.get("port")}`));