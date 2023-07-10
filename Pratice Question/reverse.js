/*
    7. Reverse Integer

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
        Input: x = 123
        Output: 321
    
    Example 2:
        Input: x = -123
        Output: -321

    Example 3:
        Input: x = 120
        Output: 21
*/

// Method 1
// var reverse = function(x) {
    
//     const nums = String(x).split("");
//     let string = "";
//     let length = nums.length - 1;
//     let stop = 0;
//     let number = 0;
//     if (nums.length == 0 || nums.length == 1) {
//         return x;
//     }
//     if (nums[0] === "-") {
//         string += "-";
//         stop = 1;
//     }
//     if (nums[length] == "0") {
//         length--;
//     }
//     for (let i = length; i >= stop; i--) {
//         string += nums[i];
//     }

//     number = Number(string);
//     if (number > 0x7FFFFFFF || number < -0x7FFFFFFF) {
//         return 0;
//     }

//     return number;
// };

// More Optimize Way
var reverse = function(x) { 
    const number = +String(Math.abs(x)).split("").reverse().join("");
    if (number > 0x7FFFFFFF || number < -0x7FFFFFFF) {
        return 0;
    }
        
    return x < 0 ? -number : number;
}
// const x = -123;
// const x = 123;
// const x =  120;
// const x = 1;
const x = -2147483648;
console.log(reverse(x));