/*
    Longest Palindromic Substring

    Given a string s, return the longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.

    Example 2:
        Input: s = "cbbd"
        Output: "bb" 
*/

// Method 1 : Failed 46 / 141
// var longestPalindrome = function(s) {
//     let resultString = "";
//     for (let i = 0; i < s.length; i++) {
//         let string = "";
//         string += s.charAt(i)
//         for (j = i+1; j < s.length; j++) {
//             string += s.charAt(j);
//             let newArray = string.split("").reverse();
//             let newString = newArray.toString().replaceAll(",", "");
//             if (string === newString) {
//                 if (resultString.length < string.length) {
//                     resultString = string;
//                 }
//             }
//         }
//     }
//     return resultString;
// };

// ---------------------------------------------------------------------------------------------------------------

// Method 1 : Failed 52 / 141
// var longestPalindrome = function(s) {
//     const length = s.length;
//     let longest = "";

//     for (let i = length - 1; i >= 0; i--) {
//         for (let j = 0; j < length - i; j++) {
//             let current = s.substring(j, i+j+1);
//             let newString = reverseString(current);

//             if (current == newString) {
//                 longest =  current;
//                 return longest;
//             }
//         }
//     }
// }

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// Method 3 :
var longestPalindrome = function(s) {
    // for (let i = 0; i < s.length; i++) {
    //     let start = i;
    //     let end = s.length - 1;
    //     let half = parseInt((s.length - i )/ 2);

    //     while(start < half && end >= half && s[start] === s[end]) {
    //         start++;
    //         end--;
    //     }

    //     return s.slice(start + 1, end);
    // }

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandFromCenter(s, i, i);
        if (oddPalindrome.length > longest.length) {
        longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandFromCenter(s, i, i + 1);
        if (evenPalindrome.length > longest.length) {
        longest = evenPalindrome;
        }
    }

    return longest;
}

function expandFromCenter(s, left, right) {
    console.log("-------------Left------------------------------");

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        console.log(`Left : ${left}, Left Char : ${s[left]}`);
        console.log(`Right : ${right}, Right Char : ${s[right]}`);
        console.log("----------------------------------------");
      left--;
      right++;
    }

  
    // Return the palindrome substring
    return s.slice(left + 1, right);
}

// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));

// console.log(longestPalindrome("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"));
console.log(longestPalindrome("babaab"))