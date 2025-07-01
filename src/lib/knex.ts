import knex, { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: process.env.KNEX_DATABASE_HOST,
    user: process.env.KNEX_DATABASE_USER,
    password: process.env.KNEX_DATABASE_PASSWORD,
    database: process.env.KNEX_DATABASE_NAME,
    port: process.env.KNEX_DATABASE_PORT
      ? parseInt(process.env.KNEX_DATABASE_PORT, 10)
      : 3306,
  },
  compileSqlOnError: process.env.KNEX_SQL_ON_ERROR === 'true',
};

const knexInstance: Knex = knex(knexConfig);

export default knexInstance;
