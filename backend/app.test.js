"use strict";

const request = require('supertest');

const app = require('./app');

test('throws not found for 404', async () => {
  const resp = await request(app).get('/rgtraqt');
  expect(resp.statusCode).toBe(404);
});