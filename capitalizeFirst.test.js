const assert = require('assert');
const capitalizeFirstLetters = ('./capitalizeFirstLetters');

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters transforms i am learning TDD correctly
assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');