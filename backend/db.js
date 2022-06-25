"use strict";

const { Client } = require('pg');
const { DATABASE_URL } = require('./config');

let db;

if (process.env.NODE_ENV === 'production') {
  db = new Client({
    connectionString: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: DATABASE_URL
  });
};

db.connect();

module.exports = db;