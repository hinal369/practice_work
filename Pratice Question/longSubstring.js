/*
    Longest Substring Without Repeating Characters

    Given a string s, find the length of the longest substring without repeating characters.

    Example 1:
        Input: s = "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.

    Example 2:
        Input: s = "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.

    Example 3:
        Input: s = "pwwkew"
        Output: 3
        Explanation: The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

let lengthOfLongestSubstring = function(s) {
    let mp = new Map();    
    let old_length = 0;
    let new_length = 0;
    for (let i = 0; i < s.length; i++) {
        if (mp.has(s[i])) {
            old_length = Math.max(new_length, old_length)
            if (mp.get(s[i - 1]) == s[i]) {
                mp.clear()
            } else {
                for (let [keys, values] of mp.entries()) {
                    if (values == mp.get(s[i])) { 
                        mp.delete(keys);
                        break;
                    }
                    mp.delete(keys);
                }           
            }
        }
        mp.set(s[i], i);
        new_length = mp.size
    }

    old_length = Math.max(new_length, old_length)
    return old_length;
};

console.log(lengthOfLongestSubstring("pwawkew"));