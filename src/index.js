const express = require("express");
const router = require("./router");
const cors = require("cors");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use("/api/files", express.static(__dirname + "/public/uploads"));
app.use(express.static(path.join(__dirname + "/public/dist")));

app.listen(app.get("port"), () => console.log(`Server on ${app.get("port")}`));
