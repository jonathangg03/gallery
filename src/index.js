const express = require("express");
const router = require("./router");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(app.get("port"), () => console.log(`Server on ${app.get("port")}`));
