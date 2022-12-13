const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");

router.use(express.json());

router
  .route("/bookings")
  .get(bookingsController.getBookingsData)
  .put(bookingsController.putBooking)
  .post(bookingsController.newBooking);

router
  .route("/bookings:id")
  .get(bookingsController.getBooking)
  .put(bookingsController.putBooking)
  .delete(bookingsController.deleteBooking);

module.exports = router;
