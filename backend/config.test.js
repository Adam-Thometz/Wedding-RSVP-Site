"use strict";

describe('config', () => {
  test('works', () => {
    process.env.SECRET_KEY = 'secretness!';
    process.env.PORT = '5000';
    process.env.DATABASE_URL = 'db man';

    const config = require('./config');
    expect(config.SECRET_KEY).toBe('secretness!');
    expect(config.PORT).toBe(5000);
    expect(config.DATABASE_URL).toBe('db man');
  });
});