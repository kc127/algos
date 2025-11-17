/**
 * https://leetcode.com/problems/valid-palindrome-ii/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days
  */
 /**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
      if (s.charAt(i) !== s.charAt(j)) {
          return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j);
      }
      i++;
      j--;
  }
  return true;
};

function isPalindrome (str, i, j) {
  while (i <= j) {
      if (str.charAt(i) !== str.charAt(j)) {
          return false;
      }
      i++;
      j--;
  }
  return true;
}