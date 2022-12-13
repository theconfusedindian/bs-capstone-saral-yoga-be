const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");
const bookings = require("../seed_data/users");
const users = require("../seed_data/users");
const reviews = require("../seed_data/reviews");

exports.getusersData = (_req, res) => {
  knex("users")
    .join("users", "users.id")
    .select("users.id", "users.name", "users.email", "users.password")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

// callback to update a user
exports.getuser = (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.status(200).send(`the user ${req.params.id} is updated`);
    });
};

// callback to delete a user
exports.deleteuser = (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).send(`the user ${req.params.id} is deleted`);
    });
};

exports.newuser = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.send("Please complete all details");
  } else {
    knex("users")
      .insert({ id: uuid(), ...req.body })
      .then(() => {
        res.status(201).send(`Your user has been received`);
      });
  }
};
