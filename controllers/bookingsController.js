const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");
const bookings = require("../seed_data/bookings");
const users = require("../seed_data/users");
const reviews = require("../seed_data/reviews");

exports.getBookingsData = (_req, res) => {
  //   res.send(`Hello!`);

  knex("bookings")
    .join("bookings", "bookings.id")
    .select("bookings.id", "bookings.date", "bookings.time_slot")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving bookings: ${err}`));
};

// callback to get a booking
exports.getBooking = (req, res) => {
  knex("bookings")
    .where("id", req.params.id)
    .then((data) => {
      res.status(200).send(`the booking ${req.params.id} is here`);
    });
};

// callback to update a booking
exports.putBooking = (req, res) => {
  knex("bookings")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.status(200).send(`the booking ${req.params.id} is updated`);
    });
};

// callback to delete a booking
exports.deleteBooking = (req, res) => {
  knex("bookings")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).send(`the booking ${req.params.id} is deleted`);
    });
};

exports.newBooking = (req, res) => {
  if (!req.body.date || !req.body.time_slot) {
    res.send("Please complete all details");
  } else {
    knex("bookings")
      .insert({ id: uuid(), ...req.body })
      .then(() => {
        res.status(201).send(`Your booking has been received`);
      });
  }
};
