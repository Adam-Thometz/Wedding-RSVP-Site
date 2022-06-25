const { BadRequestError } = require('../expressError');

function sqlForPartialUpdate(data, jsToSql = {}) {
  const keys = Object.keys(data);
  if (keys.length === 0) throw new BadRequestError('No data to update!');

  const cols = keys.map((col, i) => `"${jsToSql[col] || col}"=$${i+1}`);

  return {
    setCols: cols.join(', '),
    values: Object.values(data)
  };
};

module.exports = { sqlForPartialUpdate }