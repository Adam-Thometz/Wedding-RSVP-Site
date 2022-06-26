"use strict";

const express = require('express');
const cors = require('cors');
const { NotFoundError } = require('./expressError');
const Guest = require('./guest.model');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    const guest = await Guest.markGuest(req.params.body);
    return res.json({ guest });
  } catch (err) {
    return next(err);
  };
});

app.get('/check', async (req, res, next) => {
  try {
    const isGuest = await Guest.checkGuest(req.params.body);
    return res.json({ success: isGuest });
  } catch (err) {
    return next(err);
  };
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { status, message }
  });
});

module.exports = app;