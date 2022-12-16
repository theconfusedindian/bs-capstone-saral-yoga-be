const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.getUsers).post(usersController.newUser);

router.route("/login").post(usersController.postUser);

router
  .route("/:id")
  .get(usersController.getSingleUserData)
  .put(usersController.putUser)
  .delete(usersController.deleteUser);

module.exports = router;
