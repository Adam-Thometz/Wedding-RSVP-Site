"use strict";

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || '1920s';
const PORT = +process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL || 'wedding_rsvp';

module.exports = {
  SECRET_KEY,
  PORT,
  DATABASE_URL
};