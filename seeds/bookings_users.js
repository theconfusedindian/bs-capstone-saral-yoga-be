const bookingsData = require("../seed_data/bookings");
const usersData = require("../seed_data/users");
const reviewsData = require("../seed_data/reviews");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert(usersData);
    })
    .then(() => {
      return knex("bookings").del();
    })
    .then(() => {
      return knex("bookings").insert(bookingsData);
    });
};

exports.seed = function (knex) {
  return knex("reviews")
    .del()
    .then(() => {
      return knex("reviews").insert(reviewsData);
    });
};
