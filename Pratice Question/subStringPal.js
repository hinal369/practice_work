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
    let l = parseInt(s.length/2);
    for (let i = 0; i < l; i++) {
        let start = 0;
        let end = s.length - 1;

        while( start < l && end >= l) {
            if (s.charAt(start) === s.charAt(end)) {
                console.log("true");
            } else {
                console.log("False");
            }
            start++;
            end--;
        }
    }
}


// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));

// console.log(longestPalindrome("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"));
console.log(longestPalindrome("babaad"))