/*
    1493. Longest Subarray of 1's After Deleting One Element

    Given a binary array nums, you should delete one element from it.

    Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

    
    Example 1:

        Input: nums = [1,1,0,1]
        Output: 3
        Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's

    Example 2:

        Input: nums = [0,1,1,1,0,1,1,0,1]
        Output: 5
        Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

    Example 3:

        Input: nums = [1,1,1]
        Output: 2
        Explanation: You must delete one element.

*/

var longestSubarray = function(nums) {
    let countArray = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            countArray.push(count);
            count = 0;
        }
    }

    if (count > 0) {
        countArray.push(count);
    }

    if (nums.length === count) return count - 1
    
    let result = countArray[0] + countArray[1]
    for (i = 2; i < countArray.length; i++) {
        result = Math.max(result, countArray[i-1] + countArray [i]);
    }
    return result;

};



// const nums = [1, 0, 0, 1, 1, 1, 0, 1, 1, 0 , 0]; // Output :  5
// const nums = [1,1,0,1]; // Output :  3
// const nums =  [0,1,1,1,0,1,1,0,1] // Output :  5
// const nums =  [1,1,0,0,1,1,1,0,1];  // Output : 4 
// const nums = [1,0,0,0,0]; // Output :  1
// const nums = [1, 1, 1] // Output : 2

console.log(longestSubarray(nums));
