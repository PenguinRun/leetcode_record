// problem url: https://leetcode.com/problems/palindrome-number/submissions/

// Runtime: 232 ms, faster than 74.58% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xToString = x.toString()
    let afterProcess = ''
    for (let i = xToString.length - 1; i >= 0; i -= 1) {
        // console.log(xToString[i]);
        afterProcess += xToString[i]
    }
    if (xToString === afterProcess) {
      return true
    }
      return false
  };