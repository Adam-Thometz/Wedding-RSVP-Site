"use strict";

const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');

router.get('/:id', async (req, res, next) => {
  try {
    const guest = await Guest.get(req.params.id);
    return res.json({ guest });
  } catch (err) {
    return next(err);
  };
});

module.exports = router;