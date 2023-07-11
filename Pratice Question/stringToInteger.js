/*
    8. String to Integer (atoi)

    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

    The algorithm for myAtoi(string s) is as follows:

    Read in and ignore any leading whitespace.

    Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it 
    is either. This determines if the final result is negative or positive respectively. Assume the result is
    positive if neither is present.
    
    Read in next the characters until the next non-digit character or the end of the input is reached. The rest of 
    the string is ignored.
    
    Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer 
    is 0. Change the sign as necessary (from step 2).
    
    If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that 
    it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater 
    than 231 - 1 should be clamped to 231 - 1.

    Return the integer as the final result.

    Note:
        Only the space character ' ' is considered a whitespace character.
        Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 
*/

// var myAtoi = (s) => {
//     let newString = ""
//     s = s.trim();
//     for (let i = 0; i < s.length; i++) {
//         if (isNaN(s[i]) || hasWhiteSpace(s[i])) {
//             if (i != 0 && (s[i] != "+" || s[i] != "-")) { 
//                 break;
//             }
                
//         }
//         newString += s[i];
//     }
//     const number = Number(newString);
//     if (number > 0x7FFFFFFF || number < -0x7FFFFFFF) {
//         return number > 0 ? Math.pow(2, 31) - 1 :  Math.pow(-2, 31);
//     }
//     return isNaN(number) ? 0 : number;
// };

// function hasWhiteSpace(s) {
//     return s.indexOf(' ') >= 0;
// }

// function myAtoi(s) {
//     return Math.min(Math.pow(2,31)-1 , Math.max(parseInt(s.match(/^\s*([-+]?\d+)/)?.[1] ?? "0", 10), -Math.pow(2,31)))
// };

const myAtoi = (s) => {
    const number = parseInt(s)
    if (number > 0x7FFFFFFF || number < -0x7FFFFFFF) {
        return number > 0 ? Math.pow(2, 31) - 1 :  Math.pow(-2, 31);
    }
    return isNaN(number) ? 0 : number;
}
// const s = "4193 with words";
// const s = "   -42";
// const s = "42";
// const s = "+-12";
// const s = "+";
// const s = "00000-42a1234";
// const s = "    -88827   5655  U"
console.log(myAtoi(s));

