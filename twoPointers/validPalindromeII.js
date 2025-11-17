/**
 * https://leetcode.com/problems/valid-palindrome-ii/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days
  */
 function validPalindrome (s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return isPalindrome(s, i, j - 1) || isPalindrome(s, i - 1, j);
    }
    i++;
    j--;
  }
  return true;
 }

 function isPalindrome(str, i, j) {
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
 }