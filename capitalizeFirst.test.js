const assert = require('assert');

function capitalizeFirstLetters(text) {
  if (text.length > 0) {
    let wordsArray = text.split(' ')
    let capsArray = wordsArray.map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
  } else {
    return '';
  }
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters transforms i am learning TDD correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');