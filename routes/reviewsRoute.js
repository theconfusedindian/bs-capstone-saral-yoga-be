const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

router
  .route("/reviews")
  .get(reviewsController.getReviews)
  .post(reviewsController.newReview);

router
  .route("/review:id")
  .get(reviewsController.getSingleReviewData)
  .put(reviewsController.putReview)
  .delete(reviewsController.deleteReview);

module.exports = router;
