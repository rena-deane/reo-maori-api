// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // look for real db and username on my local machine
      database: 'dictionary',
      user:     'tester',
      password: 'kupuhuna'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      // look for real db and username on my local machine
      database: 'dictionary',
      user:     'tester',
      password: 'kupuhuna'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL || {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
