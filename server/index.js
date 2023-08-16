const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Appp listening on port ${port}!`));