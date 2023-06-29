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

var lengthOfLongestSubstring = function(s) {
    const str_array = s.split("");
    let mp = new Map();    
    let old_length = 0;
    let new_length = 0;
    for (let i = 0; i < str_array.length; i++) {
        if (mp.has(str_array[i])) {
            if (new_length > old_length) {
                old_length = new_length;
            } 
            mp.clear()
        }
        mp.set(str_array[i], i);
        new_length = mp.size
    }

    if (new_length > old_length) {
        old_length = new_length;
    } 
    return old_length;
};

console.log(lengthOfLongestSubstring("abcd abc abcdefthi fedswcrf"));