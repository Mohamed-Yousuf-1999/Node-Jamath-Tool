const express = require("express");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use(express.json());

//Routes
app.use("/api/users", userRoute);

module.exports = app;
