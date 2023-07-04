/*
    137. Single Number II

    Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

    You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example 1:
        Input: nums = [2,2,3,2]
        Output: 3
    
    Example 2:
        Input: nums = [0,1,0,1,0,1,99]
        Output: 99
*/

// Method 1 : Pass
// var singleNumber = function(nums) {
//     let map = new Map();
//     let incrementMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             incrementMap.set(nums[i], 1)
//         } else {
//             map.set(nums[i], i);
//             incrementMap.set(nums[i], 0)
//         }
//     }

//     for ( [keys, value] of incrementMap) {
//         if (value == 0) {
//             return keys
//         }
//     }
// };

// Method 2
// var singleNumber = function(nums) {
//     let obj = {};
//     for(var k of nums){
//         obj[k] = (obj[k] != null) ? obj[k]+1 : 1;
//     }
//     for(var i in obj){
//         if(obj[i] === 1) return i;
//     }
// };

// Method 3
// var singleNumber = function(nums) {
//     let ones = 0;
//     let twos = 0;

//     for (let num of nums) {
//         ones = (ones ^ num) & ~twos;
//         twos = (twos ^ num) & ~ones;
//     }

//     return ones;
// };

// const nums = [50, 3, 35, 2, 4, 50, 3, 4, 4, 3, 2, 50];
// const nums = [0, 1, 0, 1, 0, 1, 99]
const nums = [2, 2, 3, 2];
console.log(singleNumber(nums));