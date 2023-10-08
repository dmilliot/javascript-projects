const isPalindrome = require('../palindrome.js');

describe('isPalindrome', function() {
    test('should return true for a single letter', function() {
        expect(isPalindrome('a')).toBe(true);
    });
    test('should return true for a single letter repeated', function() {
        expect(isPalinfrome('aaa')).toBe(true);
    });
});