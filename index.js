// import of dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { PORT, BACKEND_URL } = process.env;

// import of files
// const homeRoute = require("./routes/homeRoute");
const reviewsRoute = require("./routes/reviewsRoute");
const bookingsRoute = require("./routes/bookingsRoute");
const usersRoute = require("./routes/usersRoute");

app.use(cors());
app.use(express.json());

// endpoints
// app.use("/", function (req, res, next) {
//   console.log("GET request called");
//   res.end();
// });
app.use("/reviews", reviewsRoute);
app.use("/bookings", bookingsRoute);
app.use("/users", usersRoute);

// starting the server
app.listen(PORT, () => {
  console.log(`Server is up and running on ${BACKEND_URL}:${PORT}`);
});
