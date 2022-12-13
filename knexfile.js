require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "saral_yoga",
    user: "root",
    password: "y97250004",
  },
};
