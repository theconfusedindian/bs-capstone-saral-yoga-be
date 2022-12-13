const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router
  .route("/users")
  .get(usersController.getUsers)
  .post(usersController.newUser);

router
  .route("/user:id")
  .get(usersController.getSingleUserData)
  .put(usersController.putUser)
  .delete(usersController.deleteUser);

module.exports = router;
