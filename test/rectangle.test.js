const assert = require('assert');
const rectangle = require('../rectangle');

describe('rectangle', () => {

  it('true is sent if two sides are equal or false if this is not the case', () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle, true);
    assert.strictEqual(rectangle, false);
  });

  it('returns the rectangle surface', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle(13, 7), 91);
  });

  it('returns the rectangle superficie', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle(13, 7), 40);
  });
});
