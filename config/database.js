const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: true,
      },
      debug: false,
      useNullAsDefault: true,
      pool: {
        min: 2,
        max: 10,
        idleTimeoutMillis: 30000,
      },
      acquireConnectionTimeout: 60000,
    },
    settings: {
      // Strapi-specific settings can go here
    },
  };
};
