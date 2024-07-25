const express = require("express");
const userRoute = require("./routes/userRoutes");
const subscriptionRoute = require("./routes/subscriptionRoutes");

const app = express();

app.use(express.json());

//Routes
app.use("/api/users", userRoute);
app.use("/api/subscriptions", subscriptionRoute);

module.exports = app;
