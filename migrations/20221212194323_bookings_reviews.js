/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
    })
    .createTable("bookings", (table) => {
      table.uuid("id").primary();
      table.date("date").notNullable();
      table.string("time_slot").notNullable();
    })
    .createTable("reviews", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("review").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("reviews")
    .dropTable("bookings")
    .dropTable("users");
};
