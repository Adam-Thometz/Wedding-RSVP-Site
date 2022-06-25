const { sqlForPartialUpdate } = require('./sqlPartial');

describe('sqlForPartialUpdate', () => {
  test('works: 1 item', () => {
    const result = sqlForPartialUpdate(
      {isAdmin: true},
      {isAdmin: 'is_admin'}
    );
    expect(result.setCols).toBe("\"is_admin\"=$1");
    expect(result.values[0]).toBe(true);
  });
  
  test('words: 2 items', () => {
    const result = sqlForPartialUpdate(
      {isComing: true, plusOne: true},
      {isComing: 'is_coming', plusOne: 'plus_one'}
      );
    expect(result.setCols).toBe("\"is_coming\"=$1, \"plus_one\"=$2");
    expect(result.values[0]).toBe(true)
    expect(result.values[1]).toBe(true)
  })
});