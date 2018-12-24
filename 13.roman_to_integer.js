// problem url: https://leetcode.com/problems/roman-to-integer/submissions/

// Runtime: 132 ms, faster than 98.37% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    for (let i = 0; i < s.length; i += 1) {
        // console.log(s[i])
      switch(s[i]) {
         case('V'):
              result = result + 5
         break;
         case('L'):
              result = result + 50
         break;
         case('D'):
              result = result + 500
         break;
         case('M'):
              result = result + 1000
         break;
         case('I'):
              if ((s[i + 1]) === 'V') {
                  i = i + 1
                  result = result + 4
                  continue
              }
              if ((s[i + 1]) === 'X') {
                  i = i + 1
                  result = result + 9
                  continue
              }
              result = result + 1
          break;
          case('X'):
              if ((s[i + 1]) === 'L') {
                  i = i + 1
                  result = result + 40
                  continue
              }
              if ((s[i + 1]) === 'C') {
                  i = i + 1
                  result = result + 90
                  continue
              }
              result = result + 10
          break;
          case('C'):
              if ((s[i + 1]) === 'D') {
                  i = i + 1
                  result = result + 400
                  continue
              }
              if ((s[i + 1]) === 'M') {
                  i = i + 1
                  result = result + 900
                  continue
              }
              result = result + 100
          break;
          default:
          break;
      }
    }
    return result
    // MMMDCCCCLXXXXVIIII
  };