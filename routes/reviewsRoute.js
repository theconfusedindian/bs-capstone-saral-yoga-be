// const fs = require("fs");
// const { v4: uuid } = require("uuid");
const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router
  .route("/")
  .get(reviewsController.getReviews)
  .post(reviewsController.newReview);

router
  .route("/:id")
  .get(reviewsController.getSingleReviewData)
  .put(reviewsController.putReview)
  .delete(reviewsController.deleteReview);

module.exports = router;
