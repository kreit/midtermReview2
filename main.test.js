const assert = require('assert');
const {
        determineParity,
        sumOfMultiples,
        findAverage,
        longestPalindrome,
        stringToAcronym,
        countWords,
        flattenArray,
        longestCommonPrefix
} = require('./main.js')

// Problem 1: determineParity
describe('determineParity', () => {
  it('should return "Even" for even numbers', () => {
    assert.strictEqual(determineParity(4), 'Even');
  });

  it('should return "Odd" for odd numbers', () => {
    assert.strictEqual(determineParity(15), 'Odd');
  });

  it('should handle negative even numbers', () => {
    assert.strictEqual(determineParity(-10), 'Even');
  });

  it('should handle negative odd numbers', () => {
    assert.strictEqual(determineParity(-5), 'Odd');
  });
});

// Problem 2: sumOfMultiples
describe('sumOfMultiples', () => {
  it('should return the sum of multiples of the target', () => {
    assert.strictEqual(sumOfMultiples([3, 6, 9, 12], 3), 30);
  });

  it('should handle an array with no multiples of the target', () => {
    assert.strictEqual(sumOfMultiples([1, 2, 3, 4], 10), 0);
  });

  it('should handle an empty array', () => {
    assert.strictEqual(sumOfMultiples([], 5), 0);
  });
});

// Problem 3: findAverage
describe('findAverage', () => {
  it('should return the average of an array of numbers', () => {
    assert.strictEqual(findAverage([1, 2, 3, 4, 5]), 3);
  });

  it('should handle an empty array by returning 0', () => {
    assert.strictEqual(findAverage([]), 0);
  });

  it('should handle an array with a single element', () => {
    assert.strictEqual(findAverage([10]), 10);
  });
});

// Problem 4: longestPalindrome
describe('longestPalindrome', () => {
  it('should return the longest palindrome in the array', () => {
    assert.strictEqual(longestPalindrome(['racecar', 'apple', 'rotator']), 'racecar');
  });

  it('should return "None" if there are no palindromes', () => {
    assert.strictEqual(longestPalindrome(['hello', 'world']), 'None');
  });

  it('should handle multiple palindromes and return the longest', () => {
    assert.strictEqual(longestPalindrome(['madam', 'level', 'deified']), 'deified');
  });
});

// Problem 5: stringToAcronym
describe('stringToAcronym', () => {
  it('should return the acronym for a given string', () => {
    assert.strictEqual(stringToAcronym("Portable Network Graphics"), 'PNG');
  });

  it('should handle a single word by returning its first letter', () => {
    assert.strictEqual(stringToAcronym("Graphics"), 'G');
  });

  it('should return an acronym in uppercase', () => {
    assert.strictEqual(stringToAcronym("Self Contained Underwater Breathing Apparatus"), 'SCUBA');
  });
});

// Problem 6: countWords
describe('countWords', () => {
  it('should return the correct word count for each word', () => {
    assert.deepStrictEqual(countWords("hello world hello"), { hello: 2, world: 1 });
  });

  it('should return an empty object for an empty string', () => {
    assert.deepStrictEqual(countWords(""), {});
  });

  it('should handle a single word', () => {
    assert.deepStrictEqual(countWords("hello"), { hello: 1 });
  });
});

// Problem 7: flattenArray
describe('flattenArray', () => {
  it('should flatten a nested array', () => {
    assert.deepStrictEqual(flattenArray([1, [2, 3], [4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if input is empty', () => {
    assert.deepStrictEqual(flattenArray([]), []);
  });

  it('should handle an array with no nested arrays', () => {
    assert.deepStrictEqual(flattenArray([1, 2, 3]), [1, 2, 3]);
  });
});

// Stretch Problem: longestCommonPrefix
describe('longestCommonPrefix', () => {
  it('should return the longest common prefix in the array', () => {
    assert.strictEqual(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
  });

  it('should return an empty string if there is no common prefix', () => {
    assert.strictEqual(longestCommonPrefix(['dog', 'racecar', 'car']), '');
  });

  it('should handle an array with only one string', () => {
    assert.strictEqual(longestCommonPrefix(['interstellar']), 'interstellar');
  });
});
