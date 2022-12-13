require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { PORT, BACKEND_URL } = process.env;
const reviewsRoute = require("./routes/reviewsRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use(cors());
app.use(express.json());

// use routes
app.use("/", reviewsRoute);
app.use("/bookings", bookingsRoute);

// starting the server
app.listen(PORT, () => {
  console.log(`Server is up and running on ${BACKEND_URL}:${PORT}`);
});
