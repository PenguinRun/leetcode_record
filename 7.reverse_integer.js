// problem url: https://leetcode.com/problems/reverse-integer/

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xToString = x.toString()
    if (xToString[0] === '-') {
        let hasNegativeNumber = reverseAction(xToString.replace('-',''))
        if (hasNegativeNumber > 2147483648) {
            return 0
        }
        return parseInt('-' + hasNegativeNumber)
    }
    let result = parseInt(reverseAction(xToString))
    if (result > 2147483648) {
        return 0
    }
    return result
};

function reverseAction (x) {
    let reverseResult = '';
    for (let i = x.length -1; i >= 0; i -= 1) {
        // console.log('===:' + x[i])
        if (x[x.length] === 0) continue;
        reverseResult += x[i]
    }
    return parseInt(reverseResult)
}