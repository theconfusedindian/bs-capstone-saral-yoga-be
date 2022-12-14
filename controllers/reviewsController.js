const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");

exports.getReviews = (_req, res) => {
  knex("reviews")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Reviews: ${err}`));
};

exports.getSingleReviewData = (req, res) => {
  knex("reviews")
    .where("id", req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(400).send(`Error retrieving the review : ${err}`)
    );
};

exports.putReview = (req, res) => {
  knex("reviews")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.status(200).send(`The review ${req.params.id} has been updated`);
    })
    .catch((err) => {
      res
        .status(500)
        .send(`Cannot update the review : ${req.params.id}: ${error}`);
    });
};

exports.newReview = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.review) {
    res.status(400).send("Please complete all details to post your review");
  } else {
    knex
      .select()
      .from("reviews")
      .insert({ id: uuid(), ...req.body })
      .then(() => {
        res.status(201).send("Thanks for posting your review");
      });
  }
};

exports.deleteReview = (req, res) => {
  knex("reviews")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).send(`The review ${req.params.id} is deleted`);
    })
    .catch((error) => {
      res.status(500).send(`Cannot delete the review ${req.params.id}`);
    });
};
