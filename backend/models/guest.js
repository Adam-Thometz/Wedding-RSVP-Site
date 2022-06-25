"use strict";

const db = require('../db');
const { NotFoundError, UnauthorizedError } = require('../expressError');

class Guest {
  static async get({ id }) {
    const result = await db.query(`
      SELECT name
      FROM guests
      WHERE id = $1
    `, [id]);

    const guest = result.rows[0];
    
    if (!guest) throw new NotFoundError('Guest not found');

    return guest;
  };
};

module.exports = Guest;