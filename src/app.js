const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const subscriptionRoute = require("./routes/subscriptionRoutes");
const donationRoute = require("./routes/donationRoutes");

const app = express();

app.use(cors());

app.use(express.json());

//Routes
app.use("/api/users", userRoute);
app.use("/api/subscriptions", subscriptionRoute);
app.use("/api/donations", donationRoute);

module.exports = app;
