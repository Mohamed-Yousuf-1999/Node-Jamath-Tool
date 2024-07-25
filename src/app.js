const express = require("express");
const userRoute = require("./routes/userRoutes");
const subscriptionRoute = require("./routes/subscriptionRoutes");
const donationRoute = require("./routes/donationRoutes");

const app = express();

app.use(express.json());

//Routes
app.use("/api/users", userRoute);
app.use("/api/subscriptions", subscriptionRoute);
app.use("/api/donations", donationRoute);

module.exports = app;
