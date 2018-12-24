// problem url: https://leetcode.com/problems/longest-common-prefix/submissions/

// Runtime: 56 ms, faster than 89.72% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function(strs) {
    let result = ''
    if (strs.length === 0) {
        return result
    }
    for (let i = 0; i < strs[0].length; i += 1) {
        let compileValue = strs[0][i]
        let correctCount = 0
        for (let j = 1; j < strs.length; j += 1) {
            // console.log('compileValue: ' + compileValue)
            // console.log('====: '+ strs[j][i])
            if (compileValue === strs[j][i]) {
                correctCount = correctCount + 1
            }
        }
        // console.log('correctCount: ' + correctCount)
        if (correctCount === (strs.length - 1)) {
            result = result + compileValue
            continue
        }
        break
    }
    return result
};

// Runtime: 56 ms, faster than 89.72% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {
    let result = ''
    if (strs.length === 0) {
        return result
    }
    test: for (let i = 0; i < strs[0].length; i += 1) {
        let compileValue = strs[0][i]
        for (let j = 1; j < strs.length; j += 1) {
            if (compileValue !== strs[j][i]) {
                break test
            }
        }
        result = result + compileValue
    }
    return result
};