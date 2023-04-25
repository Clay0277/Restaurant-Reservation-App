/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://jxcdqicm:S8Tz0v-a3laN90OAwAvxcwmmroAOHOud@ziggy.db.elephantsql.com/jxcdqicm",
  DATABASE_URL_DEVELOPMENT = "postgres://ibjzoujk:CGL5wF32KoQfD-5_UXCQe3UyFh6uPDu7@salt.db.elephantsql.com/ibjzoujk",
  DATABASE_URL_TEST = "postgres://ougzbbvd:bUqgaJ3JNtHE3jEkXh1idwofwD3mhy7D@ziggy.db.elephantsql.com/ougzbbvd",
  DATABASE_URL_PREVIEW = "postgres://rumraqac:bU-P3cDHdo_le6WZyl1wtV7pF2V2nLHe@ziggy.db.elephantsql.com/rumraqac",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
