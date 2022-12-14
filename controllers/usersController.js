const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");
const users = require("../seed_data/users");

exports.getUsers = (_req, res) => {
  knex
    .select()
    .from("users")
    .then((data) => {
      console.log("hello world!");
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

// callback for single user data
exports.getSingleUserData = (req, res) => {
  knex
    .select()
    .from("users")
    .where("id", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).send(`Error retrieving the user : ${err}`));
};

// callback to update a user
exports.putUser = (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.status(200).send(`the user ${req.params.id} is updated`);
    });
};

// callback to delete a user
exports.deleteUser = (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).send(`the user ${req.params.id} is deleted`);
    });
};

exports.newUser = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.send("Please complete all details");
  } else {
    knex("users")
      .insert({ id: uuid(), ...req.body })
      .then(() => {
        res.status(201).send(`Your user has been registered`);
      });
  }
};
