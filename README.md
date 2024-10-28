Problem 1: determineParity
Write a function, determineParity, that takes a number and returns a string: "Even" if the number is even, and "Odd" if the number is odd.

Examples:
determineParity(4); // => "Even"
determineParity(15); // => "Odd"
determineParity(-10); // => "Even"

Problem 2: sumOfMultiples
Write a function, sumOfMultiples, that takes an array of numbers and a target number. It should return the sum of all numbers in the array that are multiples of the target number.

Examples:
sumOfMultiples([3, 6, 9, 12], 3); // => 30
sumOfMultiples([10, 15, 20, 25, 30], 5); // => 100
sumOfMultiples([1, 2, 3, 4], 10); // => 0

Problem 3: findAverage
Write a function, findAverage, that takes an array of numbers and returns the average value. If the array is empty, return 0.

Examples:
findAverage([1, 2, 3, 4, 5]); // => 3
findAverage([10, 20, 30, 40]); // => 25
findAverage([]); // => 0

Problem 4: longestPalindrome
Write a function, longestPalindrome, that takes an array of strings and returns the longest string that is also a palindrome. If no palindromic strings are found, return "None".

Examples:
longestPalindrome(['racecar', 'apple', 'rotator']); // => 'racecar'
longestPalindrome(['hello', 'world']); // => 'None'
longestPalindrome(['madam', 'level', 'deified']); // => 'deified'

Problem 5: stringToAcronym
Write a function, stringToAcronym, that takes a string of words and returns the acronym formed by the first letter of each word in uppercase.

Examples:
stringToAcronym("Portable Network Graphics"); // => 'PNG'
stringToAcronym("Self Contained Underwater Breathing Apparatus"); // => 'SCUBA'
stringToAcronym("hello world"); // => 'HW'

Problem 6: countWords
Write a function, countWords, that takes a string and returns an object where each key is a word in the string and each value is the number of occurrences of that word.

Examples:
countWords("hello world hello"); // => { hello: 2, world: 1 }
countWords("a b a c a"); // => { a: 3, b: 1, c: 1 }
countWords(""); // => {}

Problem 7: flattenArray
Write a function, flattenArray, that takes an array containing nested arrays and returns a flat array with all values in a single level.

Examples:
flattenArray([1, [2, 3], [4, [5, 6]]]); // => [1, 2, 3, 4, 5, 6]
flattenArray([[1], [2, [3, 4]], 5]); // => [1, 2, 3, 4, 5]
flattenArray([]); // => []

Stretch Problem: longestCommonPrefix
Write a function, longestCommonPrefix, that takes an array of strings and returns the longest common prefix shared by all strings in the array. If no common prefix exists, return an empty string.

Examples:
longestCommonPrefix(['flower', 'flow', 'flight']); // => 'fl'
longestCommonPrefix(['dog', 'racecar', 'car']); // => ''
longestCommonPrefix(['interstellar', 'internet', 'internal']); // => 'inte'