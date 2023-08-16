const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;
const users = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", users);

app.listen(port, () => console.log(`Appp listening on port ${port}!`));
