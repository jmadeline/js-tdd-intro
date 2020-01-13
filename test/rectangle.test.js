const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', () => {

  it('is a square', () => {
    const rectangle1 = new Rectangle(10, 10);
    assert.strictEqual(rectangle1.isSquare(), true);
  });

  it('is not a square', () => {
    const rectangle2 = new Rectangle(2, 4);
    assert.strictEqual(rectangle2.isSquare(), false);
  })

  it('returns the rectangle surface', () => {
    const rectangle3 = new Rectangle(13, 7);
    assert.strictEqual(rectangle3.getArea(), 91);
  });

  it('returns the rectangle superficie', () => {
    const rectangle4 = new Rectangle(13, 7);
    assert.strictEqual(rectangle4.getPerimeter(), 40);
  });
});
